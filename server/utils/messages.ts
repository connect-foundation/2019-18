export const FEED = {
  NOT_FOUND_IMAGE: '이미지를 불러올 수 없습니다.' as const,
  NOT_FOUND_WORK_IMAGE: '해당 글을 찾을 수 없습니다.' as const,
  NOT_ADD_COMMENT: '댓글을 추가할 수 없습니다.' as const,
};

export const LOGIN = {
  ID_NOT_MATCH: '존재하지 않는 아이디입니다.',
  LOGIN_FAILURE: '아이디 또는 비밀번호를 확인해주세요',
};

export const AUTH = {
  UNAUTHORIZED: '로그인이 필요한 서비스입니다.' as const,
};
