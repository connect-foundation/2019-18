export interface WorksDetailProp{
    data: IData | null,
    isLoading: boolean,
    isError: boolean,
    commentRef: React.RefObject<HTMLTextAreaElement>,
    changeInputHandler: (e:React.ChangeEvent<HTMLTextAreaElement>)=>void,
    addNewComment: ()=>void,
}

export interface CommentProp{
    owner: string,
    comment: string,
    createdAt: string,
}

export interface IData {
    content:{
        type:string,
        content:string,
    }[],
    emoji: string[],
    comments:{
      owner: string,
      content: string,
      createdAt: number,
    }[],
    commentsAllow: boolean,
    public: boolean,
    tags:string[],
    views: number,
    _id: string,
    owner: {
      _id: string,
      name: string,
    },
    title: string,
    ccl: string,
    field: string,
}
