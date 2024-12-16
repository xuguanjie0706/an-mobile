import { CheckOutline, CloseOutline } from 'antd-mobile-icons'
import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React, { useMemo } from 'react'
import { GetContainer } from '../utils/render-to-container'
import { mergeProps } from '../utils/with-default-props'
import { PropagationEvent } from '../utils/with-stop-propagation'
import AutoCenter from '../AutoCenter'
import type { MaskProps } from '../Mask'
import Mask from '../Mask'
import SpinLoading from '../SpinLoading'

const classPrefix = `adm-toast`

export interface ToastProps {
  afterClose?: () => void
  maskStyle?: MaskProps['style']
  maskClassName?: string
  maskClickable?: boolean
  content?: ReactNode
  icon?: 'success' | 'fail' | 'loading' | ReactNode
  duration?: number
  position?: 'top' | 'bottom' | 'center'
  visible?: boolean
  getContainer?: GetContainer
  stopPropagation?: PropagationEvent[]
}

const defaultProps = {
  maskClickable: true,
  stopPropagation: ['click'],
}

export const InternalToast: FC<ToastProps> = (p) => {
  const props = mergeProps(defaultProps, p)
  const { maskClickable, content, icon, position } = props

  const iconElement = useMemo(() => {
    if (icon === null || icon === undefined) return null
    if(icon==='success'){
        return <CheckOutline className={`${classPrefix}-icon-success`} />
    }
    if(icon==='fail'){
        return <CloseOutline className={`${classPrefix}-icon-fail`} />
    }
    if(icon==='loading'){
        return <SpinLoading color='white' className={`${classPrefix}-loading`} />
    }
    return icon
  }, [icon])

  const top = useMemo(() => {
    switch (position) {
      case 'top':
        return '20%'
      case 'bottom':
        return '80%'
      default:
        return '50%'
    }
  }, [position])

  return  <Mask
      visible={props.visible}
      destroyOnClose
      opacity={0}
      disableBodyScroll={!maskClickable}
      getContainer={props.getContainer}
      afterClose={props.afterClose}
      style={{
        pointerEvents: maskClickable ? 'none' : 'auto',
        ...props.maskStyle,
      }}
      className={classNames(`${classPrefix}-mask`, props.maskClassName)}
      stopPropagation={props.stopPropagation}
    >
      <div className={classNames(`${classPrefix}-wrap`)}>
        <div
          style={{ top }}
          className={classNames(
            `${classPrefix}-main`,
            icon ? `${classPrefix}-main-icon` : `${classPrefix}-main-text`
          )}
        >
          {iconElement && (
            <div className={`${classPrefix}-icon`}>{iconElement}</div>
          )}
          <AutoCenter>{content}</AutoCenter>
        </div>
      </div>
    </Mask>
}
