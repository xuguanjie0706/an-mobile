

const classPrefix = 'adm-center-popup'

export type CenterPopupProps = {
    title?: string
    visible?: boolean
    onClose?: () => void
}

const CenterPopup: React.FC<CenterPopupProps> = (props) => {
    return <div className={classPrefix}>{props.children}</div>
}

export default CenterPopup