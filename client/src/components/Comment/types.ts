import { LoginUserState } from '../../modules/login/types';

export interface IComment{
    owner: string,
    ownerThumbnail: string,
    ownerName: string,
    content: string,
    createdAt: number,
  }

export interface CommentListProp{
    owner: string,
    comment: string,
    createdAt: string,
}

export interface CommentProp{
  comments:IComment[],
  commentsAllow: boolean,
  user: LoginUserState,
  inputComment: string,
  changeInputHandler: (e:React.ChangeEvent<HTMLTextAreaElement>)=>void,
  addNewComment: ()=>void,
}
