
export const CheckCommentLength = () => {
  const MIN_COMMENT_LENGTH = 5;
  const COMMENT_LENTGH_ERROR = `댓글은 ${MIN_COMMENT_LENGTH}자 이상이어야 합니다.`;
  return function (comment: string) {
    if (comment.length < MIN_COMMENT_LENGTH) {
      alert(COMMENT_LENTGH_ERROR);
    }
  };
};
