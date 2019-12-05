import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import UploadImage from '../UploadImage';
import Basicbox from '../Basicbox';
import * as S from './style';
import circleWarn from '../../assets/circle_warn.png';
import UploadMusic from '../UploadMusic';


function UploadMain() {
  return (
    <ModalSwitch />
  );
}


function Home() {
  return (
    <S.UploadMain>
      <S.Title>
        <p>업로드 타입을 선택해주세요 :)</p>
      </S.Title>
      <S.LinkBox>
        <Link to="/home/upload/image"><Basicbox name="이미지" /></Link>
        <Link to="/home/upload/music"><Basicbox name="음악" /></Link>
        {/* <Link to="/home/upload/background"><Basicbox name="배경화면" /></Link> */}
      </S.LinkBox>
      <S.Warn>
        <span>
          <img src={circleWarn} alt="Italian Trulli" />
        </span>
        <span>
          업로드 시, 이 콘텐츠의 저작권 소유자이며&nbsp;
          <a href="/servicePolicy.grfl" target="_blank">서비스 운영원칙</a>
          에 동의한 것으로 간주합니다.
          <br />
          * 저작권 등 타인의 권리를 침해하거나 명예를 훼손하는 이미지, 동영상, 음원 등을 게시하는 경우&nbsp;
          <a href="/terms.grfl" target="_blank">이용약관</a>
          &nbsp;및 관련 법률에 의하여 제재를 받으실 수 있습니다.
        </span>
      </S.Warn>
    </S.UploadMain>
  );
}

function ModalSwitch() {
  return (
    <Switch>
      <Route exact path="/home/upload" component={Home} />
      <Route path="/home/upload/image" component={UploadImage} />
      <Route path="/home/upload/music" component={UploadMusic} />
      <Route path="/home/upload/background" component={Home} />
    </Switch>
  );
}


export default UploadMain;
