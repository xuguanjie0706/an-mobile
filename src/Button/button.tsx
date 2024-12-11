import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import './button.less';
import { mergeProps } from 'an-mobile/utils/with-default-props';
import { isPromise } from 'an-mobile/utils/validate';
import classNames from 'classnames';

import type { ReactNode ,MouseEventHandler, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';


type NativeButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const classPrefix = `adm-button`

export type ButtonProps = {
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    type?: 'button' | 'submit' | 'reset';
    size?: 'mini' | 'small' | 'middle' | 'large';
    disabled?: boolean;
    loading?: boolean | 'auto';
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void>;
    children?: ReactNode;
    loadingIcon?: ReactNode;
    loadingText?: string | ReactNode;
    fill?: 'solid' | 'outline' | 'none';
    shape?: 'default' | 'rounded' | 'rectangular';
    block?: boolean;
}&Pick<
NativeButtonProps,
'onMouseDown' | 'onMouseUp' | 'onTouchStart' | 'onTouchEnd' | 'id'
> 



const defaultProps: ButtonProps = {
    color: 'primary',
    type: 'button',
    size: 'middle',
    disabled: false,
    loading: false,
    fill: 'solid',
    shape: 'default',
    block: false,
    onClick: () => {},
    // loadingIcon: <DotLoading color='currentColor' />,
};

export type ButtonRef = {
  nativeElement: HTMLButtonElement;
};

const Button = forwardRef<ButtonRef, ButtonProps>((p, ref) => {
  const props = mergeProps(defaultProps,p)
  const [innerLoading, setInnerLoading] = useState(false)
  const nativeButtonRef = useRef<HTMLButtonElement>(null)
  const loading = props.loading === 'auto' ?innerLoading : props.loading
  const disabled = props.disabled || loading

  useImperativeHandle(ref, () => ({
    get nativeElement() {
      return nativeButtonRef.current!
    },
  }));

  const handleClick: MouseEventHandler<HTMLButtonElement> =  async (event) => {
    if(!props.onClick) return
    const promise = props.onClick(event)
    if(isPromise(promise)){
      try {
        setInnerLoading(true)
        await promise
        setInnerLoading(false)
      } catch (error) {
        setInnerLoading(false)
        throw error
      } finally {
        setInnerLoading(false)
      } 
    }
  }


  return <button 
  type={props.type} 
  onClick={handleClick} 
  disabled={disabled} 
  ref={nativeButtonRef}
  className={classNames(classPrefix,
    {
      [`${classPrefix}-${props.color}`]: props.color,
      [`${classPrefix}-block`]: props.block,
      [`${classPrefix}-disabled`]: disabled,
      [`${classPrefix}-fill-outline`]: props.fill === 'outline',
      [`${classPrefix}-fill-none`]: props.fill === 'none',
      [`${classPrefix}-mini`]: props.size === 'mini',
      [`${classPrefix}-small`]: props.size === 'small',
      [`${classPrefix}-large`]: props.size === 'large',
      [`${classPrefix}-loading`]: loading,
    },
    `${classPrefix}-shape-${props.shape}`
  )}
  onMouseDown={props.onMouseDown}
  onMouseUp={props.onMouseUp}
  onTouchStart={props.onTouchStart}
  onTouchEnd={props.onTouchEnd}
  >{loading ? <div className={`${classPrefix}-loading-wrapper`}>
  {props.loadingIcon}
  {props.loadingText}
</div> :<span>{props.children}</span> } </button>;
});

export default Button;
