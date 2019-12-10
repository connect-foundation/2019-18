import { IImage } from './types';

export const WORK_DATA_MORE = 'upload/WORK_DATA_MORE' as const;

export const getWorkDataMore = (more: IImage[]) => ({
  type: WORK_DATA_MORE,
  payload: more,
});
