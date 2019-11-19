import { Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';

const clientId = `${process.env.clientID}`;
const clientSecret = `${process.env.clientSECRET}`;
const redirectURI = encodeURI('http://106.10.58.138:3050/oauth/callback');

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
  _next: NextFunction,
) => {
  const { code } = req.query;
  const { state } = req.query;
  const apiUrl = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${
    clientId
  }&client_secret=${
    clientSecret
  }&redirect_uri=${
    redirectURI
  }&code=${
    code
  }&state=${
    state}`;

  fetch(apiUrl, {
    headers: { 'X-Naver-Client-Id': clientId, 'X-Naver-Client-Secret': clientSecret },
  })
    .then((response) => {
      if (response.status === 200) {
        response.json().then((json) => res.json(json));
      } else {
        res.status(response.status).end();
        console.log(`error = ${response.status}`);
      }
    });
};
export { oauth, oauthCallback };
