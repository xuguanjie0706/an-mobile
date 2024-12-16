import { NativeProps, withNativeProps } from "../utils/native-props"
import { mergeProps } from "../utils/with-default-props"
import classNames from "classnames"
import React from "react"
import { FC, ReactNode } from "react"

export type StepProps = {
    status?:'wait'|'process'|'finish'|'error'
    icon?:ReactNode,
    title?:ReactNode,
    description?:ReactNode
} & NativeProps

const classPrefix = `adm-step`

const defaultProps = {
    status:'wait'
}   

const Step:FC<StepProps> = (p) => {
  const props = mergeProps(defaultProps,p)
  const { status, icon ,title,description} = props
  return withNativeProps(props, <div className={classNames(classPrefix,`${classPrefix}-status-${status}`)}>
    <div className={`${classPrefix}-indicator `}>
      <div className={`${classPrefix}-icon-container`}>{icon}</div>
    </div>
    <div className={`${classPrefix}-content`}>
      <div className={`${classPrefix}-title`}>{title}</div>
      {description && <div className={`${classPrefix}-description`}>{description}</div>}
    </div>
  </div>)
}

export default Step