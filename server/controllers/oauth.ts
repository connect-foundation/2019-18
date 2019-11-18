import { Request, Response, NextFunction } from 'express';

const clientId = `${process.env.clientID}`;
const clientSecret = `${process.env.clientSECRET}`;
const state = 'RAMDOM_STATE';
const redirectURI = encodeURI('http://106.10.58.138/oauth/callback');

const oauth = async (req: Request, res: Response, next: NextFunction) => {
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
) => {};
export { oauth, oauthCallback };
