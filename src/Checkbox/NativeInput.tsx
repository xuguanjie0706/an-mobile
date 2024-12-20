import React, { useRef } from "react"
import { useEffect } from "react"
import { useMemoizedFn } from 'ahooks'


interface Props {
    type: 'checkbox' | 'radio'
    checked: boolean
    onChange:(checked:boolean) => void
    disabled?: boolean
    id?:string
}

export const NativeInput: React.FC<Props> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleClick = useMemoizedFn((e:MouseEvent) => {
        e.stopPropagation()
        e.stopImmediatePropagation()
        const latestChecked = (e.target as HTMLInputElement).checked
        if(latestChecked === props.checked) return
        props.onChange(latestChecked)
    })

    useEffect(() => {
        if (props.disabled) return
        if (!inputRef.current) return
        const input = inputRef.current
        input.addEventListener('click', handleClick)
        return () => {
            input.removeEventListener('click', handleClick)
        }
    }, [props.checked])
    return <input 
    ref={inputRef} 
    type={props.type}
    checked={props.checked}
    disabled={props.disabled}
    id={props.id}
    onChange={()=>{}} />
}