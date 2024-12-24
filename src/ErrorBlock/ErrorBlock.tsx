import { ImageRecord } from '.';
import { createErrorBlock } from './createErrorBlock';
import {
  busyImage,
  defaultImage,
  disconnectedImage,
  emptyImage,
} from './images';

const imageRecord: ImageRecord = {
  default: defaultImage,
  disconnected: disconnectedImage,
  empty: emptyImage,
  busy: busyImage,
};

export const ErrorBlock = createErrorBlock(imageRecord);
