import { NativeProps, withNativeProps } from "an-mobile/utils/native-props";
import classNames from "classnames";
import React, { CSSProperties, FC, ReactNode, useMemo } from "react";

const classPrefix = 'adm-card';

export type CardProps = {
    children?: ReactNode;
    title?:ReactNode;
    extra?:ReactNode;
    icon?:ReactNode;
    headerClassName?:string;
    headerStyle?:CSSProperties
    bodyClassName?:string;
    bodyStyle?:CSSProperties;
    onClick?:(e:React.MouseEvent<HTMLDivElement,MouseEvent>)=>void;
    onBodyClick?:(e:React.MouseEvent<HTMLDivElement,MouseEvent>)=>void;
    onHeaderClick?:(e:React.MouseEvent<HTMLDivElement,MouseEvent>)=>void;
}   & NativeProps

export const Card:FC<CardProps> = (props) => {
    const renderHeader = useMemo(()=>{
        if (!(props.title || props.extra)) {
            return null
        }
        return (
            <div className={classNames(`${classPrefix}-header`,props.headerClassName)} onClick={props.onHeaderClick} style={props.headerStyle}>
                {props.icon&&(<div className={`${classPrefix}-header-icon`}>{props.icon}</div>) }
                <div className={`${classPrefix}-header-title`}>{props.title}</div>
                {props.extra&&(<div className={`${classPrefix}-header-extra`}>{props.extra}</div>)}
            </div>
        )
    },[props.title,props.extra,props.onHeaderClick,props.icon])

    const renderBody = useMemo(()=>{
        if (!props.children) {
            return null
        }
        return (
            <div className={classNames(`${classPrefix}-body`,props.bodyClassName)} onClick={props.onBodyClick} style={props.bodyStyle}>
                {props.children}
            </div>
        )
    },[props.children,props.onBodyClick,props.bodyClassName,props.bodyStyle])

    return withNativeProps(props, <div className={classPrefix} onClick={props.onClick}>
        {renderHeader}
        {renderBody}
    </div>) 
}