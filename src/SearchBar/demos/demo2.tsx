import { Button, SearchBar, Space } from 'an-mobile';
import { DemoBlock } from 'an-mobile/demos';
import { SearchOutline, SetOutline } from 'antd-mobile-icons';
import type { ReactNode } from 'react';
import React, { useState } from 'react';

export default () => {
  const [icon, setIcon] = useState<ReactNode | null>(<SetOutline />);

  return (
    <>
      <DemoBlock title="自定义颜色" background="#f5f5f5">
        <SearchBar
          placeholder="请输入内容"
          style={{ '--background': '#ffffff' }}
        />
      </DemoBlock>

      <DemoBlock title="自定义样式">
        <SearchBar
          placeholder="请输入内容"
          showCancelButton
          style={{
            '--border-radius': '100px',
            '--background': '#ffffff',
            '--height': '32px',
            '--padding-left': '12px',
          }}
        />
      </DemoBlock>

      <DemoBlock title="自定义图标">
        <Space block direction="vertical">
          <SearchBar icon={icon} placeholder="请输入内容" />
          <Space>
            <Button onClick={() => setIcon(null)}>不显示 icon</Button>
            <Button onClick={() => setIcon(<SearchOutline />)}>
              默认 icon
            </Button>
            <Button onClick={() => setIcon(<SetOutline />)}>自定义 icon</Button>
          </Space>
        </Space>
      </DemoBlock>
    </>
  );
};
