import 'dotenv/config';

export const API_SERVER:string = process.env.NODE_ENV === 'production'
  ? `${process.env.REACT_APP_URL}/api`
  : 'http://localhost:3050/api';

export const REACT_APP:string = process.env.NODE_ENV === 'production'
  ? `${process.env.REACT_APP_URL}`
  : 'http://localhost:3000';

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
  FEED_MUSIC_ADD_COMMENT: (id:string) => `${API_SERVER}/feed/musics/${id}/add-comment`,
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

export const LOGIN = {
  ID_NOT_VALID: '아이디를 이메일 형식으로 해주세요.',
};

export const JOIN = {
  ID_NOT_VALID: '아이디를 이메일 형식으로 해주세요.',
  PASSWORD_DO_NOT_MATCH: '비밀번호가 동일하지 않습니다',
};
// 13.5MB = 13481938, MAX SIZE is 20MB
export const MAXSIZE_OF_UPLOADIMAGE = 5242880;


export const UploadSelection = {
  genres: [
    'ASMR', 'K팝', '국악', '기타음악(ETC)', '뉴에이지', '댄스/디스코', '드럼 / 베이스', '라틴/아프로큐반', '레게', '록', '메탈', '발라드', '보사노바', '블루스', '스윙', '실험 / 추상음악', '아동음악', '알엔비 / 소울', '앰비언트', '어쿠스틱', '오디오 로고', '오케스트라 / 실내악', '왈츠', '월드뮤직', '이지 리스닝', '인도', '인디음악', '일렉트로닉', '재즈', '종교음악', '컨츄리 / 포크', '클래식', '탱고', '트로트', '팝', '펑크(Funk)', '피아노 / 단독 악기', '홀리데이(할로윈, 캐럴)', '힙합 / 랩',
  ],
  moods: [
    '감성적인', '격렬한 / 복잡한', '경건', '경쾌 / 즐거운', '고독', '귀여운', '그리운 / 회상적인', '기업의 / 스마트한', '긴장감', '마법 / 신비한', '몽환', '무서운', '미래', '범죄 / 스릴러', '사랑', '섹시 / 관능', '슬픔', '우울', '웅장', '이상한 / 기이한', '차분한', '편안함', '행복', '희극 / 재미', '희망적인', '힘있는 / 역동적인',
  ],
  instruments: [
    '가야금', '거문고', '관악기', '글로켄슈필', '꽹과리', '단소', '대금', '더블 베이스', '드럼', '리코더', '마림바', '만들린', '멜로디언', '목관악기', '바순', '바이올린', '박수', '벤조', '보컬', '봉고', '북', '비브라폰', '비올라', '색소폰', '생황', '소금', '쉐이커', '스크래칭', '스트링', '슬레이 벨', '신스 / FX', '실로폰', '아쟁', '아코디언', '어쿠스틱 기타', '어쿠스틱 베이스', '오르간', '오르골', '오보에', '오카리나', '우드블록', '우룰렐레', '일렉트릭 기타', '일렉트릭 베이스', '일렉트릭 피아노', '장구', '젬베', '징', '첼레스타', '첼로', '카주', '캐스터네츠', '콩가', '클라리넷', '키보드', '태평소', '탬버린', '퉁소', '튜바', '트럼본', '트럼펫', '팀파니', '퍼커션', '플룻', '피리', '피아노', '피콜로', '핑거 스냅', '하모니카', '하프', '하프시코드', '해금', '현악기', '호루라기', '호른', '훈', '휘파람',
  ],
};
export const socketUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_SOCKET_URL : process.env.REACT_APP_SOCKET_URL_DEV as string;

export const UPLOAD = {
  UNSUPPORTED_TYPE: '지원하지 않은 파일 형식입니다.' as const,
  WALLPAPER: 'wallpapers' as const,
  IMAGE: 'images' as const,
  DESCRIPTION: 'description' as const,
  MULTER_KEY: 'multi-files' as const,
};

export const IMAGEFORMAT = {
  JPEG: 'image/jpeg' as const,
  _JPG: '.jpg' as const,
  PNG: 'image/png' as const,
  _PNG: '.png' as const,
};

// export const OBJECT_STORAGE_WALLPAPER = `${process.env.OS_TARGET_URL}wallpapers/`;
export const OBJECT_STORAGE_WALLPAPER = 'https://kr.object.ncloudstorage.com/crafolio-test-upload/wallpapers/';

export const ERROR_MSG = {
  AXIOS: '잠시후 다시 시도해 주세요.' as const,
};

export const UPLOAD_POPUP_MSG = {
  feildWarn: '분야는 필수 입력사항 입니다.' as string,
  cclWarn: 'CCL라이선스 은 필수 입력사항 입니다.' as string,
  feildPlaceHolder: '작품 분야를 선택해 주세요.'as const,
  cclPlaceHolder: 'CCL라이선스를 선택해 주세요.' as const,
};
