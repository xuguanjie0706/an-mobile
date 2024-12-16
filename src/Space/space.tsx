import { mergeProps } from "an-mobile/utils/with-default-props";
import classNames from "classnames";
import React from "react";

import './space.less';
import { NativeProps, withNativeProps } from "an-mobile/utils/native-props";

const classPrefix = 'adm-space';

export type SpaceProps = {
    direction?: 'horizontal' | 'vertical';
    wrap?: boolean;
    block?: boolean;
    align?: 'start' | 'end' | 'center' | 'baseline';
    justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    children?: React.ReactNode;
} & NativeProps<'--gap'>


const defaultProps: SpaceProps = {
    direction: 'horizontal',
}

const Space: React.FC<SpaceProps>  = (p) => {
    const  props = mergeProps(defaultProps, p);
    const { direction, onClick } = props
    return withNativeProps(props, <div
      className={classNames(classPrefix, {
        [`${classPrefix}-wrap`]: props.wrap,
        [`${classPrefix}-block`]: props.block,
        [`${classPrefix}-${direction}`]: true,
        [`${classPrefix}-align-${props.align}`]: !!props.align,
        [`${classPrefix}-justify-${props.justify}`]: !!props.justify,
      })}
      onClick={onClick}
    >
      {React.Children.map(props.children, child => {
        return (
          child !== null &&
          child !== undefined && (
            <div className={`${classPrefix}-item`}>{child}</div>
          )
        )
      })}
    </div>)
}

export default Space;