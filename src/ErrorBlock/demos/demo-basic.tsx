import { ErrorBlock, Space } from 'an-mobile';
import { DemoBlock } from 'an-mobile/demos';
import React from 'react';

export default () => {
  return (
    <>
      <DemoBlock title="四种状态">
        <Space block direction="vertical" style={{ '--gap': '16px' }}>
          <ErrorBlock status="default" />
          <ErrorBlock status="disconnected" />
          <ErrorBlock status="empty" />
          <ErrorBlock status="busy" />
        </Space>
      </DemoBlock>
    </>
  );
};
