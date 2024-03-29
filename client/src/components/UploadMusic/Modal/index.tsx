import React from 'react';
import * as S from './styles';
import { getShortId } from '../../../utils';
import { ModalProp } from './types';


const Modal: React.FC<ModalProp> = ({
  lists,
  datas,
  changeHandler,
}) => (
  <S.DetailSelector>
    <S.Ul>
      {
    lists.map((data) => {
      if (datas.indexOf(data) !== -1) {
        return (
          <S.Li
            key={getShortId()}
            onClick={changeHandler}
            selected
          >
            { data }
          </S.Li>
        );
      }
      return (
        <S.Li
          key={getShortId()}
          onClick={changeHandler}
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
