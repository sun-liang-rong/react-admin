import fetch from '@/utils/fetch';
const prefix = '/auth';

export const login = (params: API.Auth.LoginParams) =>
  fetch<API.Auth.LoginResult>({
    method: 'post',
    url: `users/login`,
    params,
    name: '登录',
  });

export const uploadFile = (params: FormData) =>
  fetch<{
    path: string;
  }>({
    method: 'post',
    url: `/upload/image`,
    params,
    name: '上传图片',
    config: {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  });
