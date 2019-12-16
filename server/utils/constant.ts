import 'dotenv/config';

export const DEFAULT_ORIGIN_URL = 'https://kr.object.ncloudstorage.com/crafolio/user/origin/user-profile-origin.png';
export const DEFAULT_THUMBNAIL_URL = 'https://kr.object.ncloudstorage.com/crafolio/user/thumbnail/user-profile-thumbnail.png';

export const {
  OS_TARGET_URL, clientID, clientSECRET, serviceURL, reactURL,
} = process.env;

export const IMAGE_CDN: any = process.env.CDN_URL;
export const WALLPAPERS: string = 'wallpapers/';
export const IMAGE_QUERY_LOW: string = '?type=w&w=200&quality=90';
export const IMAGE_QUERY_HIGH: string = '?type=w&w=750&quality=90' as const;
export const IMAGES: string = 'images/';
export const NOTIFICATION_TYPE = {
  WORKS: 'works' as const,
  WALLPAPERS: 'wallpapers' as const,
  MUSICS: 'musics' as const,
  COMMENTS: 'comments' as const,
};
