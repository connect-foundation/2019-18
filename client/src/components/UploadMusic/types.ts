export interface IMusic{
  musicUrl:string;
  imageUrl:string;
  title: string;
  genres: string[];
  moods: string[];
  instruments: string[];
}

export interface IDocu{
  key: string;
  type: string;
  content: string | IMusic;
}
