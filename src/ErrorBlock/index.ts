import type { ReactNode } from 'react';
import { ErrorBlock } from './ErrorBlock';

export { createErrorBlock } from './createErrorBlock';

export type { ErrorBlockProps } from './createErrorBlock';

export type ErrorBlockStatus = 'default' | 'disconnected' | 'empty' | 'busy';
export type ImageRecord = Partial<Record<ErrorBlockStatus, string | ReactNode>>;

export default ErrorBlock;
