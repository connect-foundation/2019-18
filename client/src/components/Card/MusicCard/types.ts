export default interface MusicCardProp{
  _id: string;
  imageUrl: string;
  musicUrl: string;
  title: string;
  creator: {
    _id: string,
    name: string,
    thumbnailUrl: string,
  };
  ownerId: string;
  numOfComments: number;
  views: number;
  createdAt: string;
  updatedAt: string;
}
