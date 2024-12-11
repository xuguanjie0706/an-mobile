import { Button, Card } from 'an-mobile'
import { AntOutline, RightOutline } from 'antd-mobile-icons'
import { DemoBlock } from "an-mobile/demos"
import React from 'react'

import  './demo1.less'

export default () => {
  const onClick = () => {
    // Toast.show('点击了卡片')
  }

  const onHeaderClick = () => {
    // Toast.show('点击了卡片Header区域')
  }

  const onBodyClick = () => {
    // Toast.show('点击了卡片Body区域')
  }
  return (
    <>
      <DemoBlock title='基础用法' background='gray'>
        <Card title='卡片标题' onClick={onClick}>
          卡片内容
        </Card>
      </DemoBlock>

      <DemoBlock title='没有卡片内容' background='gray'>
        <Card title='卡片标题' onClick={onClick} />
      </DemoBlock>

      <DemoBlock title='没有卡片标题' background='gray'>
        <Card onClick={onClick}>卡片内容</Card>
      </DemoBlock>

      <DemoBlock title='自定义卡片内容' background='gray'>
        <Card
          icon={<AntOutline style={{ color: '#1677ff' }} />}
          title={<div style={{ fontWeight: 'normal' }}>卡片标题</div>}
          extra={<RightOutline />}
          onBodyClick={onBodyClick}
          onHeaderClick={onHeaderClick}
          style={{ borderRadius: '16px' }}
        >
          <div className={'demoContent'}>卡片内容</div>
          <div className={'demoFooter'} onClick={e => e.stopPropagation()}>
            <Button
              color='primary'
              onClick={() => {
                // Toast.show('点击了底部按钮')
              }}
            >
              底部按钮
            </Button>
          </div>
        </Card>
      </DemoBlock>

      <DemoBlock title='自定义卡片样式' background='gray'>
        <Card
          headerStyle={{
            color: '#1677ff',
          }}
          bodyClassName={'customBody'}
          title='卡片标题'
        >
          卡片内容
        </Card>
      </DemoBlock>
    </>
  )
}
