require('dotenv').config();

export const API_SERVER:string = process.env.NODE_ENV === 'production'
  ? `${process.env.REACT_APP_URL}/api`
  : 'http://localhost:3050/api';

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
