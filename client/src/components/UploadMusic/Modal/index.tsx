import React from 'react';
import * as S from './styles';
import { getShortId } from '../../../utils';

interface ModalProp {
  lists: string[];
  datas: string[];
  setter: React.Dispatch<React.SetStateAction<string[]>>;
}

const Modal: React.FC<ModalProp> = ({
  lists,
  datas,
  setter,
}) => {
  const onClickHandler = (e:React.MouseEvent<HTMLLIElement>) => {
    const newData = e.currentTarget.innerHTML;
    if (datas.indexOf(newData) !== -1) {
      setter(datas.filter((data) => data !== newData));
    } else {
      setter([
        ...datas,
        e.currentTarget.innerHTML,
      ]);
    }
  };

  return (
    <S.DetailSelector>
      <S.Ul>
        {
          lists.map((data) => <S.Li key={getShortId()} onClick={onClickHandler}>{ data }</S.Li>)
        }
      </S.Ul>
    </S.DetailSelector>
  );
};

export default Modal;
