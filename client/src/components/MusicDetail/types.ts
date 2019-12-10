
import { LoginUserState } from '../../modules/login/types';
import { IComment } from '../Comment/types';
import { IMusic } from '../UploadMusic/types';

export interface MusicDetailProp {
  data: IData | null;
  user: LoginUserState;
  isLoading: boolean,
  isError: boolean,
}

export interface IMusicContent{
  type: string;
  content: IMusic | string;
}

export interface IData{
  _id: string,
  owner: {
    _id: string;
    name: string;
  };
  title: string;
  content: IMusicContent[];
  comments: IComment[];
  commentsAllow: boolean,
  public: boolean,
  tags: string[],
  views: string;
  field: string,
  ccl: string;
  createdAt: string,
  updatedAt: string,
}
