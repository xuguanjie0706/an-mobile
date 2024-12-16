

import { NativeProps, withNativeProps } from "an-mobile/utils/native-props"
import { mergeProps } from "an-mobile/utils/with-default-props"
import classNames from "classnames"
import React, { ReactElement } from "react"



const classPrefix = "adm-page-indicator"

export type PageIndicatorProps = {
    total:number
    current:number
    color?:'primary'|'white'
    direction?: "horizontal" | "vertical"
} & NativeProps<
| '--dot-color'
| '--active-dot-color'
| '--dot-size'
| '--active-dot-size'
| '--dot-border-radius'
| '--active-dot-border-radius'
| '--dot-spacing'
>

const defaultProps = {
    color:'primary',
    direction:'horizontal'
}

const PageIndicator = (p:PageIndicatorProps) => {
  const props = mergeProps(defaultProps,p)
  const dots:ReactElement[] =[]
  for (let i = 0; i < props.total; i++) {
    dots.push(<div key={i} className={classNames(`${classPrefix}-dot`,{
        [`${classPrefix}-dot-active`]:i===props.current
    })}></div>)
  }

  return withNativeProps(props, <div className={classNames(classPrefix,`${classPrefix}-${props.direction}`,`${classPrefix}-color-${props.color}`)} >
    {dots}
  </div>)
}


export default PageIndicator
