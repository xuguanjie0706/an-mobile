import { NativeProps, withNativeProps } from "../utils/native-props"
import classNames from "classnames"
import React from "react"
import { FC, ReactNode } from "react"

export type SwiperItemProps = {
  children?:ReactNode
  onClick?:(e:React.MouseEvent<HTMLDivElement,MouseEvent>)=>void
} & NativeProps

const classPrefix = `adm-swiper-item`

const SwiperItem:FC<SwiperItemProps> = (props) => {
  return withNativeProps(props, <div className={classNames(classPrefix)}>
    {props.children}
  </div>)
}

export default SwiperItem