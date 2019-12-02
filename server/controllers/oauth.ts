import { Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';
import { isExist, create } from '../services/user';
import { loginService } from '../services/login';
import {
  serviceURL, reactURL, clientID, clientSECRET,
} from '../utils/constant';

const clientId = `${clientID}`;
const clientSecret = `${clientSECRET}`;
const redirectURI = encodeURI(`${serviceURL}/oauth/callback`);
const oauthCallBackURI = 'https://nid.naver.com/oauth2.0/token';
const getInfoURI = 'https://openapi.naver.com/v1/nid/me';

const getAccessToken = async (code, state) => {
  const oauthParams = {
    grant_type: 'authorization_code',
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectURI,
    code,
    state,
  };
  const paramedOauthCallBackURI = `${oauthCallBackURI}?${Object.keys(oauthParams).map((key) => `${key}=${oauthParams[key]}`).join('&')}`;
  console.log(paramedOauthCallBackURI);
  const responseToken = await fetch(paramedOauthCallBackURI, {
    method: 'GET',
    headers: { 'X-Naver-Client-Id': clientId, 'X-Naver-Client-Secret': clientSecret },
  });
  if (responseToken.status !== 200) {
    return null;
  }
  const tokenJson = await responseToken.json();
  return tokenJson.access_token;
};

const getUserInfo = async (accessToken) => {
  const headers = { Authorization: `Bearer ${accessToken}` };
  const responseUserInfo = await fetch(getInfoURI, {
    method: 'GET',
    headers,
  });
  const infoJson = await responseUserInfo.json();

  if (infoJson.response) {
    return { ...infoJson.response, pwd: infoJson.response.id };
  }
  return {};
};

const makeUser = async ({ id, ...userInfo }) => {
  await create(userInfo);
};

const login = async ({ email, pwd }, res) => {
  const result = await loginService(email, pwd);
  if (result.token !== null) {
    res.cookie('token', result.token);
  }
};

const oauthCallback = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { code } = req.query;
  const { state } = req.query;

  const accessToken = await getAccessToken(code, state);
  if (!accessToken) {
    return next(new Error('auth Error : 사용자 정보 반환 실패'));
  }

  const userInfo = await getUserInfo(accessToken);
  if (!userInfo) {
    return next(new Error('auth Error : 사용자 정보 반환 실패'));
  }

  try {
    if (!await isExist(userInfo.email)) {
      await makeUser(userInfo);
    }
    await login(userInfo, res);
    return res.redirect(`${reactURL}`);
  } catch (e) {
    next(e);
  }
};


export { oauthCallback };
