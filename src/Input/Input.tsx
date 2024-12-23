import { useConfig } from 'an-mobile/ConfigProvider';
import { bound } from 'an-mobile/utils/bound';
import { isIOS } from 'an-mobile/utils/validate';
import { CloseCircleFill } from 'antd-mobile-icons';
import classNames from 'classnames';
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { NativeProps, withNativeProps } from '../utils/native-props';
import { usePropsValue } from '../utils/use-props-value';
import { mergeProps } from '../utils/with-default-props';
import useInputHandleKeyDown from './useInputHandleKeyDown';

const classPrefix = 'adm-input';

type NativeInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type AriaProps = {
  // These props currently are only used internally. They are not exported to users:
  role?: string;
};

export type InputProps = Pick<
  NativeInputProps,
  | 'maxLength'
  | 'minLength'
  | 'autoComplete'
  | 'autoFocus'
  | 'pattern'
  | 'inputMode'
  | 'type'
  | 'name'
  | 'onFocus'
  | 'onBlur'
  | 'onPaste'
  | 'autoCapitalize'
  | 'autoCorrect'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'onCompositionStart'
  | 'onCompositionEnd'
  | 'onClick'
  | 'step'
  | 'id'
  | 'placeholder'
  | 'readOnly'
  | 'disabled'
  | 'enterKeyHint'
> & {
  value?: string;
  defaultValue?: string;
  onChange?: (val: string) => void;
  clearable?: boolean;
  clearIcon?: React.ReactNode;
  onlyShowClearWhenFocus?: boolean;
  onClear?: () => void;
  onEnterPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  id?: string;
} & NativeProps<
    '--font-size' | '--color' | '--placeholder-color' | '--text-align'
  > &
  AriaProps;

export type InputRef = {
  clear: () => void;
  focus: () => void;
  blur: () => void;
  nativeElement: HTMLInputElement | null;
};

const defaultProps = {
  defaultValue: '',
  clearIcon: <CloseCircleFill />,
  onlyShowClearWhenFocus: true,
};

export const Input = forwardRef<InputRef, InputProps>((p, ref) => {
  const { locale, input: componentConfig = {} } = useConfig();
  const props = mergeProps(defaultProps, componentConfig, p);
  const [value, setValue] = usePropsValue(props);
  const [hasFocus, setHasFocus] = useState(false);
  const compositionRef = useRef(false);
  const compositionStartRef = useRef(false);
  const nativeInputRef = useRef<HTMLInputElement>(null);

  const handleKeydown = useInputHandleKeyDown({
    onEnterPress: props.onEnterPress,
    onKeyDown: props.onKeyDown,
    nativeInputRef,
    enterKeyHint: props.enterKeyHint,
  });

  useImperativeHandle(ref, () => ({
    clear: () => {
      if (nativeInputRef.current) {
        nativeInputRef.current.value = '';
      }
      props.onChange?.('');
    },
    focus: () => {
      nativeInputRef.current?.focus();
    },
    blur: () => {
      nativeInputRef.current?.blur();
    },
    get nativeElement() {
      return nativeInputRef.current;
    },
  }));

  function checkValue() {
    let nextValue = value;
    if (props.type === 'number') {
      const boundValue =
        nextValue &&
        bound(parseFloat(nextValue), props.min, props.max).toString();
      if (Number(boundValue) !== Number(nextValue)) {
        nextValue = boundValue;
      }
    }
    if (nextValue !== value) {
      setValue(nextValue);
    }
  }

  const shouldShowClear = (() => {
    if (!props.clearable || !value || props.readOnly) return false;
    if (props.onlyShowClearWhenFocus) {
      return hasFocus;
    } else {
      return true;
    }
  })();

  return withNativeProps(
    props,
    <div
      className={classNames(
        classPrefix,
        props.disabled && `${classPrefix}-disabled`,
      )}
    >
      <input
        ref={nativeInputRef}
        className={`${classPrefix}-element`}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onFocus={(e) => {
          setHasFocus(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setHasFocus(false);
          checkValue();
          props.onBlur?.(e);
        }}
        onPaste={props.onPaste}
        id={props.id}
        placeholder={props.placeholder}
        disabled={props.disabled}
        readOnly={props.readOnly}
        maxLength={props.maxLength}
        minLength={props.minLength}
        min={props.min}
        max={props.max}
        autoComplete={props.autoComplete}
        autoFocus={props.autoFocus}
        pattern={props.pattern}
        inputMode={props.inputMode}
        type={props.type}
        name={props.name}
        autoCapitalize={props.autoCapitalize}
        autoCorrect={props.autoCorrect}
        onKeyDown={handleKeydown}
        onKeyUp={props.onKeyUp}
        onCompositionStart={(e) => {
          compositionRef.current = true;
          props.onCompositionStart?.(e);
        }}
        onCompositionEnd={(e) => {
          compositionRef.current = false;
          props.onCompositionEnd?.(e);
        }}
        onClick={props.onClick}
        step={props.step}
        role={props.role}
        aria-valuenow={props['aria-valuenow']}
        aria-valuemax={props['aria-valuemax']}
        aria-valuemin={props['aria-valuemin']}
        aria-label={props['aria-label']}
      />
      {shouldShowClear && (
        <div
          className={`${classPrefix}-clear`}
          onMouseDown={(e) => {
            e.preventDefault();
          }}
          onClick={() => {
            setValue('');
            props.onClear?.();

            // https://github.com/ant-design/ant-design-mobile/issues/5212
            if (isIOS() && compositionStartRef.current) {
              compositionStartRef.current = false;
              nativeInputRef.current?.blur();
            }
          }}
          aria-label={locale.Input.clear}
        >
          {props.clearIcon}
        </div>
      )}
    </div>,
  );
});
