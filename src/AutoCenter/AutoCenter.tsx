import React from "react";

export type AutoCenterProps = {
    children?: React.ReactNode;
}
const classPrefix = 'adm-auto-center';

const AutoCenter: React.FC<AutoCenterProps> = (props) => {
    return <div className={classPrefix}>
        <div className={`${classPrefix}-content`}>
            {props.children}
        </div>
    </div>
}

export default AutoCenter;