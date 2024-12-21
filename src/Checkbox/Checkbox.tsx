import { forwardRef, useContext, useImperativeHandle, useMemo } from "react"
import { NativeProps, withNativeProps } from "an-mobile/utils/native-props"
import { usePropsValue } from "an-mobile/utils/use-props-value"
import { mergeProps } from "an-mobile/utils/with-default-props"
import { CheckboxGroupContext } from "../Checkbox/GroupContext"
import { isDev } from "an-mobile/utils/is-dev"
import { devWarning } from "an-mobile/utils/dev-log"
import React from "react"
import { IndeterminateIcon } from "../Checkbox/IndeterminateIcon"
import { CheckIcon } from "../Checkbox/CheckIcon"
import classNames from "classnames"

const classPrefix = 'adm-checkbox'


export type CheckboxValue = string | number

export type CheckboxProps = {
    checked?: boolean
    defaultChecked?: boolean
    disabled?: boolean
    onChange?: (checked: boolean) => void
    indeterminate?: boolean
    block?: boolean
    id?: string
    value?: string
    icon?:(checked: boolean,indeterminate: boolean) => React.ReactNode
    children?: React.ReactNode
    onClick?: (e: React.MouseEvent<HTMLLabelElement,MouseEvent>) => void
} & NativeProps<'--icon-size'|'--gap'|'--font-size'>

export type CheckboxRef = {
  check: () => void
  uncheck: () => void
  toggle: () => void
}



const defaultProps: CheckboxProps = {
  checked: false,
  defaultChecked: false,
  disabled: false,
}

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>((p, ref) => {
    const groupContext = useContext(CheckboxGroupContext)
  const props = mergeProps(defaultProps, p)

  let [checked, setChecked] = usePropsValue({
    value: props.checked,
    defaultValue: props.defaultChecked ??false,
    onChange: props.onChange,
  }) as [boolean, (v: boolean) => void]
  let disabled = props.disabled

  const { value } = props
  if (groupContext && value !== undefined) {
    if (isDev) {
      if (p.checked !== undefined) {
        devWarning(
          'Checkbox',
          'When used within `Checkbox.Group`, the `checked` prop of `Checkbox` will not work.'
        )
      }
      if (p.defaultChecked !== undefined) {
        devWarning(
          'Checkbox',
          'When used within `Checkbox.Group`, the `defaultChecked` prop of `Checkbox` will not work.'
        )
      }
    }

    checked = groupContext.value.includes(value)
    setChecked = (checked: boolean) => {
      if (checked) {
        groupContext.check(value)
      } else {
        groupContext.uncheck(value)
      }
      props.onChange?.(checked)
    }
    disabled = disabled || groupContext.disabled
  }

  useImperativeHandle(ref, () => ({
    check: () => {
      setChecked(true)
    },
    uncheck: () => {
      setChecked(false)
    },
    toggle: () => {
      setChecked(!checked)
    },
  }))

  const renderIcon = useMemo(() => {
    if (props.icon) {
        return (
          <div className={`${classPrefix}-custom-icon`}>
            {props.icon(checked, props.indeterminate??false)}
          </div>
        )
      }
      return (
        <div className={`${classPrefix}-icon`}>
          {props.indeterminate ? <IndeterminateIcon /> : checked && <CheckIcon />}
        </div>
      )
  }, [checked, props.indeterminate, props.icon])


return withNativeProps(props, (
    <label
      onClick={props.onClick}
      className={classNames(classPrefix, {
        [`${classPrefix}-checked`]: checked && !props.indeterminate,
        [`${classPrefix}-indeterminate`]: props.indeterminate,
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-block`]: props.block,
      })}
    >
       
        {renderIcon}
        {props.children && (
        <div className={`${classPrefix}-content`}>{props.children}</div>
      )}
    </label>
))
})