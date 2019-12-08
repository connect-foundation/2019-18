import React from 'react';
import * as S from './styles';
import { getShortId } from '../../../utils';

interface ModalProp {
  lists: string[];
  datas: string[];
  changeHandler: (e:React.MouseEvent<HTMLLIElement>)=>void;
}

const Modal: React.FC<ModalProp> = ({
  lists,
  datas,
  changeHandler: setter,
}) => (
  <S.DetailSelector>
    <S.Ul>
      {
    lists.map((data) => {
      if (datas.indexOf(data) !== -1) {
        return (
          <S.Li
            key={getShortId()}
            onClick={setter}
            selected
          >
            { data }
          </S.Li>
        );
      }
      return (
        <S.Li
          key={getShortId()}
          onClick={setter}
        >
          { data }
        </S.Li>
      );
    })
  }
    </S.Ul>
  </S.DetailSelector>
);
export default Modal;
