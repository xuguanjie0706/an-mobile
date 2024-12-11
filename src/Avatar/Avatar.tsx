import { NativeProps, withNativeProps } from "an-mobile/utils/native-props";
import { mergeProps } from "an-mobile/utils/with-default-props";
import React from "react";
import { FC, ReactNode } from "react";

import Image, { ImageProps } from "../Image";
import { FallIcon } from "./FallIcon";

const classPrefix = 'adm-avatar';

export type AvatarProps = {
    src?: string;
    fallback?: ReactNode;
    fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}&NativeProps<'--size'|'--border-radius'>&Pick<ImageProps,'alt'|'lazy'|'onError'|'onLoad'| 'onClick'>

const defaultProps:AvatarProps = {
    fallback: <div className={`${classPrefix}-fallback`}><FallIcon/></div> ,
    fit: 'cover',
}

export const Avatar:FC<AvatarProps> = (p) => {
    const props =  mergeProps(defaultProps,p)
    return  withNativeProps(props, <Image
    className={classPrefix}
    src={props.src}
    fallback={props.fallback}
    fit={props.fit}
    />)
}
