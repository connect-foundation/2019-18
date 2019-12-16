export interface IImage{
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
    createdAt: number;
    updatedAt: number;
}
