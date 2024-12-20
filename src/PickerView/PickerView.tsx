import { useDebounceEffect } from "ahooks"
import { useColumnsExtend } from "./columns-extend"
import { NativeProps, withNativeProps } from "an-mobile/utils/native-props"
import { mergeProps } from "an-mobile/utils/with-default-props"
import React, { useCallback, useEffect } from "react"
import { memo, ReactNode, useState } from "react"


const classPrefix = 'an-picker-view'

export type PickerColumn = (string|PickerColumnItem)[]

export type PickerColumnItem = {
    label: ReactNode
    value: string | number
    key?: string | number
}

export type PickerValueExtend = {
    columns: PickerColumnItem[][]
    items: (PickerColumnItem | null)[]
}

export type PickerValue = string | number | null |undefined

export type PickerViewProps = {
    columns: PickerColumn[]| ((value: PickerValue[]) => PickerColumn[])
    onChange?: (value:PickerValue,extend:PickerValueExtend) => void
    value?: PickerValue[]
    defaultValue?: PickerValue[]
    mouseWheel?: boolean
    loading?: boolean
    loadingContent?: ReactNode
} & NativeProps<'--item-height' | '--item-font-size'|'--height'>

const defaultProps: PickerViewProps = {
    defaultValue: [],
    mouseWheel: false,
}



export const PickerView =  memo<PickerViewProps>(p => {
    const props = mergeProps(defaultProps, p)
    const [innerValue,setInnerValue] = useState<PickerValue[]>(props.value?? props.defaultValue?? [])

    useEffect(() => { 
        if (props.value === undefined) return
        if (props.value === innerValue) return
        setInnerValue(props.value)
    }, [props.value])

    useEffect(() => {
        if (props.value === innerValue) return
        const timeout = window.setTimeout(() => {
          if (props.value !== undefined && props.value !== innerValue) {
            setInnerValue(props.value)
          }
        }, 1000)
        return () => {
          window.clearTimeout(timeout)
        }
      }, [props.value, innerValue])

      const extend  = useColumnsExtend(props.columns,innerValue)
      const columns = extend.columns

      useDebounceEffect(() => {
        if (props.value === innerValue) return
        props.onChange?.(innerValue[0],extend)
      }, [innerValue], {
        wait: 0,
        leading: false,
        trailing: true,
      })

      const handleSelect = useCallback((val:PickerValue,index:number) => {
        setInnerValue(prev=>{
            const next = [...prev]
            next[index] = val
            return next
        })
      },[])

    
    
    return withNativeProps(props, <div className={classPrefix}>PickerView</div>)
})