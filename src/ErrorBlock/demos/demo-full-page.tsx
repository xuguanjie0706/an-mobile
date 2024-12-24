import { ErrorBlock } from 'an-mobile';
import React, { useEffect } from 'react';

export default () => {
  useEffect(() => {
    document.body.style.background = 'var(--adm-color-background)';
  }, []);
  return <ErrorBlock fullPage />;
};
