import { IMusic } from '../types';

export interface MusicUploaderProp{
  docuKey: string;
  content: IMusic;
  titleChangeHandler: (key:string)=>(e: React.ChangeEvent<HTMLInputElement>) => void;
  genresChangeHandler: (key:string)=>(e: React.MouseEvent<HTMLLIElement>) => void;
  moodsChangeHandler: (key: string) => (e: React.MouseEvent<HTMLLIElement>) => void;
  instrumentsChangeHandler: (key: string) => (e:React.MouseEvent<HTMLLIElement>) => void;
  imageUrlChangeHanldler: (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}
