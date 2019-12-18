export interface IMusic{
  _id: string;
  ownerId: string;
  creator:{
    _id: string,
    name: string,
    email: string,
  };
  url: string;
  title:string;
  numOfComments:string;
  views: string;
}

export interface IMusic2{
  _id: string;
  imageUrl: string;
  musicUrl: string;
  title:string;
  creator:{
    _id: string,
    name: string,
    thumbnailUrl: string,
  };
  ownerId: string;
  numOfComments:number;
  views: number;
  createdAt: string;
  updatedAt: string;
}
