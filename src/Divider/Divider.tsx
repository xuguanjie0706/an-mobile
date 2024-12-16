import React, { FC } from 'react';
import classNames from 'classnames';
import { NativeProps, withNativeProps } from 'an-mobile/utils/native-props';
import { mergeProps } from 'an-mobile/utils/with-default-props';
import './Divider.less';
const classPrefix = 'adm-divider';

export type DividerProps = {
    children?: React.ReactNode;
    contentPosition?: 'left' | 'right' | 'center';
    direction?: 'horizontal' | 'vertical';
} & NativeProps

const defaultProps: Partial<DividerProps> = {
    contentPosition: 'center',
    direction: 'horizontal',
}


const Divider:FC<DividerProps> = p => {
    const props = mergeProps(defaultProps, p);
    const { children, contentPosition,direction } = props;
    return withNativeProps(props, <div className={classNames(classPrefix, 
        `${classPrefix}-${direction}`,
        `${classPrefix}-${contentPosition}`
    )}>
        {children&&(<div className={`${classPrefix}-content`}>{children}</div>)}
    </div>);
}

export default Divider;