const request = require('supertest');

const app = require('../app');


describe('로그인 테스트', () => {
  beforeAll(async () => {
    userData = {
      email: 'test@gmail.com',
      pwd: '1234',
    };
  });

  test('실제 로그인 테스트. | 200  login success', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        email: userData.email,
        pwd: userData.pwd,
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeTruthy();
    expect(response.body.msg).toBe('success login');
  });

  test('실제 로그인 테스트. | 404 사용자를 찾을 수 없음', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        email: 'ramdom@gmail.com',
        pwd: userData.pwd,
      });

    expect(response.statusCode).toBe(404);
    expect(response.body.token).toBe(null);
    expect(response.body.msg).toBe('사용자를 찾을 수 없습니다.');
  });

  test('실제 로그인 테스트. | 422 비밀번호 확인 바람', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        email: userData.email,
        pwd: '3456',
      });

    expect(response.statusCode).toBe(422);
    expect(response.body.token).toBe(null);
    expect(response.body.msg).toBe('비밀번호를 확인 해주세요.');
  });
});
