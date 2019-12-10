import { IImage } from './types';

export const WORK_DATA = 'upload/WORK_DATA' as const;
export const INCREASE_SNUM = 'upload/INC_SKIPNUM' as const;
export const WORK_DATA_MORE = 'upload/WORK_DATA_MORE' as const;

export const getWorkData = () => ({ type: WORK_DATA });
export const getWorkDataMore = (more: IImage[]) => ({
  type: WORK_DATA_MORE,
  payload: more,
});
export const increaseSkippedNum = () => ({
  type: INCREASE_SNUM,
});
