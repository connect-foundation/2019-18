export default interface MusicCardProp{
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
}