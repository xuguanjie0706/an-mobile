import { useConfig } from 'an-mobile/ConfigProvider'
import { NativeProps, withNativeProps } from 'an-mobile/utils/native-props'
import { usePropsValue } from 'an-mobile/utils/use-props-value'
import { mergeProps } from 'an-mobile/utils/with-default-props'
import classNames from 'classnames'
import React, { FC, ReactNode, useState } from 'react'
import { SpinIcon } from './spin-icon'
import { isPromise } from 'an-mobile/utils/validate'

export type SwitchProps = {
    loading?: boolean
    disabled?: boolean
    checked?: boolean
    defaultChecked?: boolean
    beforeChange?: (val: boolean) => Promise<void>
    onChange?: (checked: boolean) => void
    checkedText?: ReactNode
    uncheckedText?: ReactNode
} & NativeProps<'--checked-color' | '--border-width' | '--height' | '--width'>


const defaultProps: SwitchProps = {
    defaultChecked: false,
}

const classPrefix = 'adm-switch'

export const Switch: FC<SwitchProps> = (p) => {
    const props = mergeProps(defaultProps, p)
    const disabled = props.disabled || props.loading || false
    const [changing, setChanging] = useState(false)
    const { locale } = useConfig()
    const [checked, setChecked] = usePropsValue({
        value: props.checked,
        defaultValue: props.defaultChecked??false,
        onChange: props.onChange,
    })

    const onClick = async () => {
       if(disabled || props.loading || changing) return
       const nextChecked = !checked
       if(props.beforeChange){
        setChanging(true)
        try{
            await props.beforeChange(nextChecked)
            setChecked(false)
        }catch(e){
            setChanging(false)
            throw e
        }
       }
       const result = setChecked(nextChecked)
       if (isPromise(result)) {
        setChanging(true)
        try{
            await result
            setChanging(false)
        }catch(e){
            setChanging(false)
            throw e
        }
       }
    }


    return  withNativeProps(props, <div 
        onClick={onClick} 
        role='switch'
        aria-checked={checked}
        aria-disabled={disabled}
        aria-label={locale.Switch.name}
        className={ classNames(classPrefix, 
            props.className,
            {
                [`${classPrefix}-checked`]: checked,
                [`${classPrefix}-disabled`]: disabled,
            }
        )}>
            <div className={`${classPrefix}-checkbox`}>
                <div className={`${classPrefix}-handle`}>
                    {(props.loading || changing) && (
                        <SpinIcon className={`${classPrefix}-spin-icon`} />
                    )}
                </div>
                <div className={`${classPrefix}-inner`}>
                    {checked ? props.checkedText : props.uncheckedText}
                </div>
            </div>
        </div>)
}