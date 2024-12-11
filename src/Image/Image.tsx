import { NativeProps, withNativeProps } from 'an-mobile/utils/native-props';
import { mergeProps } from 'an-mobile/utils/with-default-props';
import React, { FC, useRef, useState } from 'react';
import { LazyDetector } from './lazy-detector';
import { toCSSLength } from 'an-mobile/utils/to-css-length';
import { ImageIcon } from './ImageIcon';
import { BrokenImageIcon } from './BrokenImageIcon';
// import { staged } from 'staged-components' // 使用不适用没区别，目前未发现
import { useIsomorphicUpdateLayoutEffect } from 'an-mobile/utils/use-isomorphic-update-layout-effect';

const classPrefix = 'adm-image';

export type ImageProps = {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  lazy?: boolean;
  draggable?: boolean;
  placeholder?: React.ReactNode;
  fallback?: React.ReactNode;
  onContainerClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onClick?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
} & NativeProps<'--width' | '--height'> &
  Pick<
    React.ImgHTMLAttributes<HTMLImageElement>,
    | 'crossOrigin'
    | 'decoding'
    | 'loading'
    | 'referrerPolicy'
    | 'sizes'
    | 'srcSet'
    | 'useMap'
    | 'id'
  >;

const defaultProps: ImageProps = {
  fit: 'fill',
  lazy: false,
  draggable: false,
  placeholder: <div className={`${classPrefix}-placeholder ${classPrefix}-tip`}><ImageIcon /></div>,
  fallback: <div className={`${classPrefix}-fallback ${classPrefix}-tip`}><BrokenImageIcon /></div>,
};

export const Image: FC<ImageProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  let src: string | undefined = props.src;
  let srcSet: string | undefined = props.srcSet
  const [initialized, setInitialized] = useState(!props.lazy);
  src = initialized ? props.src : undefined
  srcSet = initialized ? props.srcSet : undefined

  useIsomorphicUpdateLayoutEffect(() => {
    setLoaded(false)
    setFailed(false)
  }, [src])
  

  function renderInner() {
    if (failed) {
      return <>{props.fallback}</>;
    }
    return (
      <>
        {!loaded && props.placeholder}
        <img
          ref={imgRef}
          src={src}
          alt={props.alt}
          className={`${classPrefix}-img`}
          onClick={props.onClick}
          onLoad={(e)=>{
            setLoaded(true)
            props.onLoad?.(e)
          }}
          onError={(e)=>{
            setFailed(true)
            props.onError?.(e)
          }}
          style={{
            objectFit: props.fit,
            display: loaded ? 'block' : 'none',
          }}
          crossOrigin={props.crossOrigin}
          decoding={props.decoding}
          loading={props.loading}
          referrerPolicy={props.referrerPolicy}
          sizes={props.sizes}
          srcSet={srcSet}
          useMap={props.useMap}
          id={props.id}
        />
      </>
    );
  }

  const style:ImageProps['style'] = {}
  if(props.width){
    style['--width'] = toCSSLength(props.width)
    style.width = toCSSLength(props.width)
  }
  if (props.height) {
    style['--height'] = toCSSLength(props.height);
    style.height = toCSSLength(props.height);
  }

  return withNativeProps(
    props,
    <div
      ref={ref}
      className={classPrefix}
      style={{ width: props.width, height: props.height }}
      onClick={props.onContainerClick}
    >
      {props.lazy && !initialized && (
        <LazyDetector
          onActive={() => {
            setInitialized(true);
          }}
        />
      )}
      {renderInner()}
    </div>,
  );
}
