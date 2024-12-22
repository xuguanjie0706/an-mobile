import { isPromise } from 'an-mobile/utils/validate';
import { mergeProps } from 'an-mobile/utils/with-default-props';
import classNames from 'classnames';
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import './button.less';

import { NativeProps } from 'an-mobile/utils/native-props';
import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
  ReactNode,
} from 'react';

type NativeButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const classPrefix = `adm-button`;

export type ButtonProps = {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  fill?: 'solid' | 'outline' | 'none';
  size?: 'mini' | 'small' | 'middle' | 'large';
  block?: boolean;
  loading?: boolean | 'auto';
  loadingText?: string;
  loadingIcon?: ReactNode;
  disabled?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void | Promise<void>;
  type?: 'submit' | 'reset' | 'button';
  shape?: 'default' | 'rounded' | 'rectangular';
  children?: ReactNode;
} & Pick<
  NativeButtonProps,
  'onMouseDown' | 'onMouseUp' | 'onTouchStart' | 'onTouchEnd' | 'id'
> &
  NativeProps<
    | '--text-color'
    | '--background-color'
    | '--border-radius'
    | '--border-width'
    | '--border-style'
    | '--border-color'
  >;

const defaultProps: ButtonProps = {
  color: 'default',
  fill: 'solid',
  block: false,
  loading: false,
  // loadingIcon: <DotLoading color='currentColor' />,
  type: 'button',
  shape: 'default',
  size: 'middle',
};

export type ButtonRef = {
  nativeElement: HTMLButtonElement;
};

const Button = forwardRef<ButtonRef, ButtonProps>((p, ref) => {
  const props = mergeProps(defaultProps, p);
  const [innerLoading, setInnerLoading] = useState(false);
  const nativeButtonRef = useRef<HTMLButtonElement>(null);
  const loading = props.loading === 'auto' ? innerLoading : props.loading;
  const disabled = props.disabled || loading;

  useImperativeHandle(ref, () => ({
    get nativeElement() {
      return nativeButtonRef.current!;
    },
  }));

  const handleClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
    if (!props.onClick) return;
    const promise = props.onClick(event);
    if (isPromise(promise)) {
      try {
        setInnerLoading(true);
        await promise;
        setInnerLoading(false);
      } catch (error) {
        setInnerLoading(false);
        throw error;
      } finally {
        setInnerLoading(false);
      }
    }
  };

  return (
    <button
      type={props.type}
      onClick={handleClick}
      disabled={disabled}
      ref={nativeButtonRef}
      className={classNames(
        classPrefix,
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
        `${classPrefix}-shape-${props.shape}`,
      )}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      onTouchStart={props.onTouchStart}
      onTouchEnd={props.onTouchEnd}
    >
      {loading ? (
        <div className={`${classPrefix}-loading-wrapper`}>
          {props.loadingIcon}
          {props.loadingText}
        </div>
      ) : (
        <span>{props.children}</span>
      )}{' '}
    </button>
  );
});

export default Button;
