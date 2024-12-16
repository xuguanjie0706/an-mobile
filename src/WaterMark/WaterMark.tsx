import { NativeProps, withNativeProps } from 'an-mobile/utils/native-props';
import { mergeProps } from 'an-mobile/utils/with-default-props';
import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';

const classPrefix = 'adm-water-mark';

export type WaterMarkProps = {
  gapX?: number;
  gapY?: number;
  content?: string | string[];
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  width?: number;
  height?: number;
  zIndex?: number;
  rotate?: number;
  color?: string;
  fontColor?: string;
  fontFamily?: string;
  fontStyle?: 'none' | 'normal' | 'italic' | 'oblique';
  fontWeight?: 'normal' | 'light' | 'weight' | number;
  fontSize?: number;
  fullPage?: boolean;
} & NativeProps<'--z-index'>;

const defaultProps: WaterMarkProps = {
  fullPage: true,
  gapX: 24,
  gapY: 48,
  width: 120,
  height: 64,
  rotate: -22,
  imageWidth: 120,
  imageHeight: 64,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontColor: 'rgba(0,0,0,.15)',
  fontSize: 14,
  fontFamily: 'sans-serif',
};

const WaterMark: FC<WaterMarkProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const {
    fullPage,
    gapX,
    gapY,
    width,
    height,
    rotate,
    image,
    imageWidth,
    imageHeight,
    content,
    fontStyle,
    fontWeight,
    fontColor,
    fontSize,
    fontFamily,
    zIndex
  } = props;
  const [base64Url, setBase64Url] = useState<string>('');

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const ratio = window.devicePixelRatio;

    const canvasWidth = (gapX + width) * ratio;
    const canvasHeight = (gapY + height) * ratio;

    const markWidth = width * ratio;
    const markHeight = height * ratio;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    if (ctx) {
      if (image) {
        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate((Math.PI / 180) * Number(rotate));
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.referrerPolicy = 'no-referrer';
        img.onload = () => {
          ctx.drawImage(
            img,
            (-imageWidth * ratio) / 2,
            (-imageHeight * ratio) / 2,
            imageWidth * ratio,
            imageHeight * ratio,
          );
          ctx.restore();
          setBase64Url(canvas.toDataURL());
        };
        img.src = image;
      } else if (content) {
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        // 文字绕中间旋转
        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate((Math.PI / 180) * Number(rotate));

        const markSize = Number(fontSize) * ratio;
        ctx.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`;
        ctx.fillStyle = fontColor;
        if (Array.isArray(content)) {
          content.forEach((item: string, index: number) =>
            ctx.fillText(item, 0, index * markSize),
          );
        } else {
          ctx.fillText(content, 0, 0);
        }
        ctx.restore();
        setBase64Url(canvas.toDataURL());
      }
    } else {
      throw new Error('Canvas is not supported in the current environment');
    }
  }, [
    gapX,
    gapY,
    rotate,
    fontStyle,
    fontWeight,
    width,
    height,
    fontFamily,
    fontColor,
    image,
    content,
    fontSize,
  ]);

  return withNativeProps(props, <div   className={classNames(classPrefix, {
    [`${classPrefix}-full-page`]: fullPage,
  })}
  style={{
    zIndex,
    backgroundSize: `${gapX + width}px`,

    // Not give `url` if its empty. Which will cause 404 error.
    backgroundImage: base64Url === '' ? undefined : `url('${base64Url}')`,
  }}></div>);
};

export default WaterMark;
