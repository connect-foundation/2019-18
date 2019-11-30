export interface IComment{
    owner: string,
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
  commentRef: React.RefObject<HTMLTextAreaElement>,
  changeInputHandler: (e:React.ChangeEvent<HTMLTextAreaElement>)=>void,
  addNewComment: ()=>void,
}
