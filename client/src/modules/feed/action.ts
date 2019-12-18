import { IImage, IWallpaper, IMusic } from './types';

export const WORK_DATA_MORE = 'upload/WORK_DATA_MORE' as const;
export const WALLPAPER_DATA_MORE = 'upload/WALLPAPER_DATA_MORE' as const;
export const MUSIC_DATA_MORE = 'upload/MUSIC_DATA_MORE' as const;

export const getWorkDataMore = (more: IImage[]) => ({
  type: WORK_DATA_MORE,
  payload: more,
});

export const getWallpaperDataMore = (more: IWallpaper[]) => ({
  type: WALLPAPER_DATA_MORE,
  payload: more,
});

export const getMusicDataMore = (more: IMusic[]) => ({
  type: MUSIC_DATA_MORE,
  payload: more,
});
