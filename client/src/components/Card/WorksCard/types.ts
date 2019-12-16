export default interface WorksCardProp{
  _id: string,
  ownerId: string,
  imgUrl: string;
  title: string;
  numOfComments: string;
  views: string;
  creator: {
    _id: string,
    email: string,
    name: string,
  };
  createdAt: number;
  updatedAt: number;
}
