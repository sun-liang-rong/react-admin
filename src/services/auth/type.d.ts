/* eslint-disable @typescript-eslint/no-unused-vars */
export namespace Auth {
  type LoginParams = {
    username: string;
    password: string;
  };

  type LoginResult = {
    token: string;
    userInfo: API.User.UserInfo;
  };
}
