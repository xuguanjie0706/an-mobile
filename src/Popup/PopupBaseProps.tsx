import React, { CSSProperties, ReactNode } from 'react'
import { GetContainer } from '../utils/render-to-container'
import { MaskProps } from "../Mask"
import { PropagationEvent } from '../utils/with-stop-propagation'
import { CloseOutline } from 'antd-mobile-icons'

export type PopupBaseProps = {
    afterClose?: () => void
    afterShow?: () => void
    bodyClassName?: string
    bodyStyle?: CSSProperties
    closeOnMaskClick?: boolean
    closeIcon?: ReactNode
    destroyOnClose?: boolean
    disableBodyScroll?: boolean
    forceRender?: boolean
    getContainer?: GetContainer
    mask?: boolean
    maskClassName?: string
    maskStyle?: CSSProperties
    onClick?: (e: React.MouseEvent<HTMLDivElement,MouseEvent>) => void
    onClose?: () => void
    onMaskClick?: (e: React.MouseEvent<HTMLDivElement,MouseEvent>) => void
    showCloseButton?: boolean
    stopPropagation?: PropagationEvent[]
    visible?: boolean
}

export const defaultPopupBaseProps: PopupBaseProps = {
    closeOnMaskClick: false,
    closeIcon: <CloseOutline />,
    destroyOnClose: false,
    disableBodyScroll: true,
    forceRender: false,
    getContainer: () => document.body,
    mask: true,
    showCloseButton: false,
    stopPropagation: ['click'],
    visible: false,
}