
interface Checker {
  msg: ()=> string;
  check: (str:string)=>boolean;
}

export const CommentChecker = {
  minLen: 5,
  msg: () => `댓글은 ${CommentChecker.minLen}자 이상이어야 합니다.`,
  check: (str: string) => (str.length >= CommentChecker.minLen),
};

export const IdChecker = {
  minLen: 5,
  maxLen: 15,
  msg: () => `아이디는 ${IdChecker.minLen}자 이상 ${IdChecker.maxLen}자 이하 여야합니다.`,
  check: (str: string) => (str.length >= IdChecker.minLen && str.length <= IdChecker.maxLen),
};

export const CheckStringLength = (checker:Checker) => (str: string) => {
  if (!checker.check(str)) {
    alert(checker.msg());
    return false;
  }
  return true;
};
