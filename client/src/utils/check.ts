import Swal from 'sweetalert2';
import 'animate.css';
import { Alert } from './index';

interface Checker {
  msg: ()=> string;
  check: (str:string)=>boolean;
}

interface ObjChecker {
  msg: ()=> string;
  check: (obj: any[]) => boolean;
}

interface CheckerBoolen {
  msg: ()=> string;
  check: (is:boolean) => boolean;
}

export const IsLoginChecker = {
  msg: () => '로그인이 필요한 서비스입니다.',
  check: (isLogin: boolean) => (isLogin),
};

export const CommentChecker = {
  minLen: 5,
  maxLen: 1000,
  msg: () => `댓글은 ${CommentChecker.minLen}자 이상, ${CommentChecker.maxLen}자 이하여야 합니다.`,
  check: (str: string) => (str.length >= CommentChecker.minLen && str.length <= CommentChecker.maxLen),
};

export const IdChecker = {
  minLen: 5,
  maxLen: 15,
  msg: () => `아이디는 ${IdChecker.minLen}자 이상 ${IdChecker.maxLen}자 이하 여야합니다.`,
  check: (str: string) => (str.length >= IdChecker.minLen && str.length <= IdChecker.maxLen),
};

export const musicUploaderChecker = {
  max: 5,
  msg: () => `최대 ${musicUploaderChecker.max} 개 선택 가능합니다.`,
  check: (objs: any[]) => objs.length <= musicUploaderChecker.max - 1,
};
export const CheckStringLength = (checker:Checker) => (str: string) => {
  if (!checker.check(str)) {
    Alert(checker.msg());
    return false;
  }
  return true;
};

export const CheckIsLogin = (checker: CheckerBoolen) => (isLogin: boolean) => {
  if (!checker.check(isLogin)) {
    Alert(checker.msg());
    return false;
  }
  return true;
};

export const CheckObjLength = (checker: ObjChecker) => (objs: any[]) => {
  if (!checker.check(objs)) {
    Alert(checker.msg());
    return false;
  }
  return true;
};
