import { FC } from "react";


const classPrefix = 'adm-capsule-tabs';

export type CapsuleTabsProps = {
 
}


export const CapsuleTabs:FC<CapsuleTabsProps> = (props) => {
    return <div>CapsuleTab</div>;
}


export type CapsuleTabProps = {
    title: string;
    disabled?: boolean;
    destroyOnClose?: boolean;
    forceRender?: boolean;
    children?: React.ReactNode;
}


export const CapsuleTab = () => {
    return <div>CapsuleTab</div>;
}