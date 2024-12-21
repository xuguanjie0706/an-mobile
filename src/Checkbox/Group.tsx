import React from 'react'
import type { FC, ReactNode } from 'react'
import { mergeProps } from 'an-mobile/utils/with-default-props'
import { CheckboxValue } from '.'
import { CheckboxGroupContext } from './GroupContext'
import { usePropsValue } from 'an-mobile/utils/use-props-value'

export interface CheckboxGroupProps {
    value?: CheckboxValue[]
    onChange?: (val: CheckboxValue[]) => void
    defaultValue?: CheckboxValue[]
    disabled?: boolean
    children?: ReactNode
  }

const defaultProps: CheckboxGroupProps = {
    disabled: false,
    defaultValue: [],
}

export const Group: FC<CheckboxGroupProps> = p => {
    const props = mergeProps(defaultProps, p)
    const [value, setValue] = usePropsValue(props)
  
    return (
      <CheckboxGroupContext.Provider
        // TODO: 性能优化
        value={{
          value: value,
          disabled: props.disabled ?? false,
          check: v => {
            setValue([...value, v])
          },
          uncheck: v => {
            setValue(value.filter(item => item !== v))
          },
        }}
      >
        {props.children}
      </CheckboxGroupContext.Provider>
    )
  }
  

