import { NativeProps, withNativeProps } from "an-mobile/utils/native-props";
import classNames from "classnames";
import React, { CSSProperties, FC, ReactNode, useMemo } from "react";

const classPrefix = 'adm-collapse';

export type CollapseProps = {
    children?:ReactNode,
    defaultActiveKey?:string[],
    activeKey?:string[],
    accordion?:boolean,
    onChange?:(activeKey:string[])=>void,
    onClick?:(e:React.MouseEvent<HTMLDivElement,MouseEvent>)=>void
} & NativeProps

export const Collapse:FC<CollapseProps> = (props) => {

    return withNativeProps(props, <div className={classPrefix} onClick={props.onClick}>

    </div>) 
}

export type CollapsePanelProps = {
    children?:ReactNode
} & NativeProps


export const CollapsePanel = ()=>{
    <></>
}