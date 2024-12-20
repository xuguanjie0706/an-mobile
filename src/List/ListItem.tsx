import { isNodeWithContent } from "an-mobile/utils/is-node-with-content"
import { NativeProps, withNativeProps } from "an-mobile/utils/native-props"
import { RightOutline } from "antd-mobile-icons"
import classNames from "classnames"
import React, { FC, ReactNode } from "react"


const classPrefix = `adm-list-item`

export type ListItemProps = {
    title?:ReactNode,
    description?:ReactNode,
    extra?:ReactNode,
    children?:ReactNode
    prefix?:ReactNode,
    disabled?:boolean,
    clickable?:boolean,
    showArrow?:boolean,
    arrowIcon?:ReactNode,
    arrow?: boolean | ReactNode
    onClick?:(e:React.MouseEvent<HTMLAnchorElement | HTMLDivElement,MouseEvent>)=>void
} & NativeProps


export const ListItem:FC<ListItemProps> =(props)=> {
    const {clickable,prefix,title,description,extra,children,disabled,showArrow,arrowIcon} = props

    const content = <div className={`${classPrefix}-content`}>
        {isNodeWithContent(prefix) && <div className={`${classPrefix}-content-prefix`}>{prefix}</div>}
        <div className={`${classPrefix}-content-main`}>
            {isNodeWithContent(title) && <div className={`${classPrefix}-title`}>{title}</div>}
            {children}
            {isNodeWithContent(description) && <div className={`${classPrefix}-description`}>{description}</div>}
        </div>
        {isNodeWithContent(extra) && <div className={`${classPrefix}-extra`}>{extra}</div>}
        {showArrow && <div className={`${classPrefix}-content-arrow`}>
            {arrowIcon || <RightOutline />}
        </div>} 
    </div>

    return withNativeProps(props,React.createElement(clickable?"a":"div",{
        className:classNames(`${classPrefix}`,disabled && `${classPrefix}-disabled`,clickable && `${classPrefix}-clickable`),
        onClick: props.disabled ? undefined : props.onClick,
    },content))
}
    
