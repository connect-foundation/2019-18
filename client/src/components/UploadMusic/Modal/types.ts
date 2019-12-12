export interface ModalProp {
  lists: string[];
  datas: string[];
  changeHandler: (e:React.MouseEvent<HTMLLIElement>)=>void;
}

export interface LiProp {
  selected?: boolean;
}
