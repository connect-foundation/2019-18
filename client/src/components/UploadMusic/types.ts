export interface IMusic{
  title: string;
  author: string;
  musicUrl: string;
  coverUrl: string;
}

export interface IDocu{
  key: string;
  type: string;
  content: string | IMusic;
}
