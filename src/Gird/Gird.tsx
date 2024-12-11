import { withNativeProps,NativeProps } from 'an-mobile/utils/native-props';
import { toCSSLength } from 'an-mobile/utils/to-css-length';
import { mergeProps } from 'an-mobile/utils/with-default-props';
import React, { CSSProperties } from 'react'
import './Gird.less'

export type GridProps = {
  children?: React.ReactNode;   
  gap?: number | string| [number | string, number | string]
  columns: number;
} & NativeProps<'--gap' | '--gap-vertical' | '--gap-horizontal'>

const classPrefix = 'adm-grid';



export const Grid: React.FC<GridProps> = props=>{
    const { gap ,columns} = props
    const style: GridProps['style'] & Record<'--columns', string> = {
        '--columns': columns.toString()
      }
   
    if (gap !== undefined) {
        if (Array.isArray(gap)) {
          style['--gap-horizontal'] = toCSSLength(gap[0])
          style['--gap-vertical'] = toCSSLength(gap[1])
        } else {
          style['--gap'] = toCSSLength(gap)
        }
      }
    return withNativeProps(props,<div className={classPrefix} style={style}>
        {props.children}
    </div>) 
} 


export type GridItemProps = {
    children?: React.ReactNode;
    span: number;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
} & NativeProps


type GridItemStyle = CSSProperties &  Record<'--item-span', GridItemProps['span']>

export const GridItem: React.FC<GridItemProps> = p=>{
    const props = mergeProps({ span: 1 }, p)
    const style: GridItemStyle = {
        '--item-span': props.span
    }
   
    return withNativeProps(props,<div className={`${classPrefix}-item`} style={style} onClick={props.onClick}>
        {props.children}
    </div>) 
}


