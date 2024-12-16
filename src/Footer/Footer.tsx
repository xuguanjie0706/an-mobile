



import React, { ReactNode } from 'react'
import { NativeProps, withNativeProps } from '../utils/native-props'
import { mergeProps } from 'an-mobile/utils/with-default-props'
import classNames from 'classnames'
import Divider from 'an-mobile/Divider'




export type LinkItem = {
  text: string
  href?: string
}

export type ChipItem = {
  text: ReactNode
  type?: 'plain' | 'link'
}

const classPrefix= 'adm-footer'


export type FooterProps = {
  label?: ReactNode
  links?: LinkItem[]
  chips?: ChipItem[]
  content?: ReactNode
  onChipClick?: (item: ChipItem,index: number) => void
  onLinkClick?: (item: LinkItem,index: number) => void
} & NativeProps <'--background-color'>


const defaultProps: FooterProps = {
  label: '',
  links: [],
  chips: [],
  content: '',
}

export const Footer: React.FC<FooterProps> = p => {
  const props = mergeProps(defaultProps, p) 
  const { label, links, chips, content, onChipClick, onLinkClick } = props
  const clickLinkItem = (
    item: LinkItem,
    index: number,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (onLinkClick) {
      e.preventDefault()
      onLinkClick(item, index)
    }
  }

  const clickChipItem = (item: ChipItem,index: number,) => {
    if (chips?.length && item.type === 'link') {
       onChipClick?.(item, index)
    }
  }
  return withNativeProps(
    props,
    <div className={classNames(classPrefix)}>
        <div className={`${classPrefix}-label`}>   
          <Divider>{label}</Divider>
        </div>
        <div className={`${classPrefix}-links`}>
       
        {links?.map((link, index) => (
             <React.Fragment key={index}>
            <a   rel='noopener noreferrer' href={link.href}  onClick={event => clickLinkItem(link, index, event)}>{link.text}</a>
            </React.Fragment>
        ))}
      </div>
      {content && <div className={`${classPrefix}-content`}>{content}</div>}
      {chips && chips.length > 0 && (
        <div className={`${classPrefix}-chips`}>
          {chips.map((chip, index) => (
            <div
              key={index}
              onClick={() => clickChipItem(chip, index)}
              className={classNames(`${classPrefix}-chip`, {
                [`${classPrefix}-chip-link`]: chip.type === 'link',
              })}
            >
              {chip.text}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
