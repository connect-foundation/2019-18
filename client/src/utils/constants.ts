require('dotenv').config();

export const API_SERVER:string = process.env.NODE_ENV === 'production'
  ? `${process.env.REACT_APP_URL}/api`
  : 'http://localhost:3050/api';

// OAUTH URL
const CLIENT_ID = `${process.env.REACT_APP_clientID}`;
const OAUTH_REDIRECT_URL:string = `${API_SERVER}/oauth/callback`;
const STATE = 'RAMDOM_STATE';

export const OAUTH_URL:string = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
  CLIENT_ID
}&redirect_uri=${
  OAUTH_REDIRECT_URL
}&state=${
  STATE
}`;

export const API_ADDR = {
  FEED_IMAGE_ADD_COMMENT: (id:string) => `${API_SERVER}/feed/images/${id}/add-comment`,
};

export const fieldoptions = [
  { value: '일러스트', label: '일러스트' },
  { value: '회화', label: '회화' },
  { value: '사진', label: '사진' },
  { value: '캘리그라피', label: '캘리그라피' },
  { value: '디자인', label: '디자인' },
];

export const ccloptions = [
  { value: 'All', label: 'Copyright @ All Rights Reserved' },
  { value: 'CCBY', label: 'CC BY (저작자 표시)' },
  { value: 'CCBY-SA', label: 'CC BY-SA (저작자표시-동일조건변경허락)' },
  { value: 'CCBY-ND', label: 'CC BY-ND (저작자표시-변경금지)' },
  { value: 'CCBY-NC', label: 'CC BY-NC (저작자표시-비영리)' },
  { value: 'CCBY-NC-SA', label: 'CC BY-NC-SA (저작자표시-비영리-동일조건변경허락)' },
  { value: 'CCBY-NC-ND', label: 'CC BY-NC-ND (저작자표시-비영리-변경금지)' },
];

// 13.5MB = 13481938, MAX SIZE is 20MB
export const MAXSIZE_OF_UPLOADIMAGE = 5242880;
