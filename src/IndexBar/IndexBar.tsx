import { NativeProps } from "an-mobile/utils/native-props";
import React from "react";
import { FC } from "react";


const classPrefix = 'adm-index-bar';

export type IndexBarProps = {
    children?: React.ReactNode;

}& NativeProps


export const IndexBar:FC<IndexBarProps> = (props) => {
    return <div>CapsuleTab</div>;
}

