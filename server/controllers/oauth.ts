import { Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';
import { SSL_OP_NETSCAPE_CA_DN_BUG } from 'constants';
import { isExist, create } from '../models/user';
import { loginService } from '../services/login';

const clientId = `${process.env.clientID}`;
const clientSecret = `${process.env.clientSECRET}`;
const redirectURI = encodeURI('http://106.10.58.138:3050/oauth/callback');
const oauthCallBackURI = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=';
const getInfoURI = 'https://openapi.naver.com/v1/nid/me';

const oauth = async (_req: Request, res: Response, _next: NextFunction) => {
  const state = 'RAMDOM_STATE';
  const apiUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
    clientId
  }&redirect_uri=${
    redirectURI
  }&state=${
    state}`;
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  res.end(
    `<a href='${
      apiUrl
    }'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>`,
  );
};

const oauthCallback = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { code } = req.query;
  const { state } = req.query;

  // getAccessToken

  const apiUrl = `${
    oauthCallBackURI
  }${
    clientId
  }&client_secret=${
    clientSecret
  }&redirect_uri=${
    redirectURI
  }&code=${
    code
  }&state=${
    state}`;

  const responseToken = fetch(apiUrl, {
    method: 'GET',
    headers: { 'X-Naver-Client-Id': clientId, 'X-Naver-Client-Secret': clientSecret },
  });

  if (responseToken.status !== '200') {
    next(new Error('auth Error : accessToken 반환 실패'));
  }

  const tokenJson = await responseToken.json();
  const accessToken = tokenJson.access_token;

  // getUserInfo

  const headers = { Authorization: `Bearer ${accessToken}` };
  const responseUserInfo = await fetch(getInfoURI, {
    method: 'GET',
    headers,
  });

  if (responseUserInfo.status !== '200') {
    next(new Error('auth Error : 사용자 정보 반환 실패'));
  }

  const infoJson = await responseUserInfo.json();

  const {
    name, email, profile_image, id,
  } = infoJson;

  const profileImage = profile_image;
  // id : 네이버 아이디가 아닌, 사용자별 식별가능한 어떤 값
  const pwd = id;


  // 계정 생성
  if (!await isExist(email)) {
    const result = await create({
      name, email, pwd, profile_image,
    });
  }

  // 로그인 처리
  try {
    const result = await loginService(email, id);
    if (result.token !== null) {
      res.cookie('token', result.token);
    }
    return res.status(result.status).json({ token: result.token, msg: result.msg });
  } catch (e) {
    next(e);
  }
};
export { oauth, oauthCallback };
