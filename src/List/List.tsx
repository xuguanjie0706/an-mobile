import { NativeProps, withNativeProps } from "an-mobile/utils/native-props";
import { mergeProps } from "an-mobile/utils/with-default-props";
import classNames from "classnames";
import React, { CSSProperties, FC, forwardRef, ReactNode, useImperativeHandle, useRef } from "react";

const classPrefix = 'adm-list';

export type ListProps = {
    children?:ReactNode,
    mode?:'default'|'card',
    header?: ReactNode | string
} & NativeProps<
    | '--active-background-color'
    | '--align-items'
    | '--border-bottom'
    | '--border-inner'
    | '--border-top'
    | '--extra-max-width'
    | '--font-size'
    | '--header-font-size'
    | '--padding-left'
    | '--padding-right'
    | '--prefix-padding-right'
    | '--prefix-width'
>


export const defaultProps = {
    mode: 'default',
}
export type ListRef = {
    nativeElement: HTMLDivElement | null
}
export const List = forwardRef<ListRef,ListProps>((p,ref) => {
    const props = mergeProps(defaultProps,p);
    const nativeElementRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => ({
        get nativeElement() {
          return nativeElementRef.current
        },
    }))
    return withNativeProps(props, <div className={ classNames(classPrefix,`${classPrefix}-${props.mode}`)} ref={nativeElementRef}>
        {props.header && <div className={`${classPrefix}-header`}>{props.header}</div>}
        <div className={`${classPrefix}-body`}>
           <div className={`${classPrefix}-body-inner`}>{props.children}</div> 
        </div>
    </div>) 
})

