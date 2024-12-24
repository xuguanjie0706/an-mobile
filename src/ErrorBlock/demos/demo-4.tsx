import { createErrorBlock, Space } from 'an-mobile';
import { DemoBlock } from 'an-mobile/demos';
import { FileWrongOutline, SearchOutline } from 'antd-mobile-icons';
import React from 'react';
import './demo-4.less';

const ErrorBlock = createErrorBlock({
  default: <FileWrongOutline className={'myErrorBlockIcon'} />,
  empty: <SearchOutline className={'myErrorBlockIcon'} />,
});

export default () => {
  return (
    <>
      <DemoBlock title="四种状态">
        <Space block direction="vertical" style={{ '--gap': '16px' }}>
          <ErrorBlock status="default" />
          <ErrorBlock status="empty" />
        </Space>
      </DemoBlock>
    </>
  );
};
