import { NativeProps, withNativeProps } from "an-mobile/utils/native-props";
import { mergeProps } from "an-mobile/utils/with-default-props";
import classNames from "classnames";
import React, { CSSProperties, FC, ReactNode, useMemo, useRef } from "react";

const classPrefix = 'adm-ellipsis';

export type EllipsisProps = {
    content?:string,
    direction?:'start'|'end'|'middle',
}   & NativeProps


const defaultProps:EllipsisProps = {
    direction:'end',
}

const rootRef = useRef<HTMLDivElement>(null)

export const Ellipsis:FC<EllipsisProps> = (p) => {
    const props = mergeProps(defaultProps,p);
    return withNativeProps(props, <div className={classPrefix} ref={rootRef}>

    </div>) 
}