

import { NativeProps, withNativeProps } from "an-mobile/utils/native-props"
import { mergeProps } from "an-mobile/utils/with-default-props"
import classNames from "classnames"
import React, {  FC, ReactNode } from "react"


const classPrefix = `adm-steps`
const stepClassPrefix = `adm-step`

export type StepsProps = {
    current?:number
    direction?:'horizontal'|'vertical'
    children?:ReactNode
} & NativeProps<
| '--title-font-size'
| '--description-font-size'
| '--indicator-margin-right'
| '--icon-size'
>

const defaultProps = {
  current:0,
  direction:'horizontal'
}
const defaultIcon = <span className={`${stepClassPrefix}-icon-dot`} />

const PageIndicator:FC<StepsProps> = (p) => {
  const props = mergeProps(defaultProps,p)
  const { direction, current } = props

  return withNativeProps(props, 
  <div className={classNames(classPrefix,`${classPrefix}-${direction}`)} >
      {React.Children.map(props.children,(child,index)=>{
        if(!React.isValidElement(child)){
          return child
        }
        const childProps = child.props
        let status = childProps.status || 'wait'
        if(index<current){
          status = childProps.status || 'finish'
        }else if(index===current){
          status = childProps.status || 'process'
        }
        const icon = childProps.icon || defaultIcon
        return React.cloneElement(child as React.ReactElement,{
          status,
          icon
        })
      })}
  </div>)
}


export default PageIndicator
