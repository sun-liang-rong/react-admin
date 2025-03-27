import fetch from '@/utils/fetch';
const prefix = '/tags';

export const getTagList = (params: API.Tag.ListParams) =>
  fetch<API.Tag.ListResult>({
    method: 'get',
    url: `${prefix}`,
    params,
    name: '获取标签列表',
  });

export const createTag = (params: API.Tag.CreateParams) =>
  fetch<API.Success>({
    method: 'post',
    url: `${prefix}`,
    params,
    name: '创建标签',
  });

export const editTag = (params: API.Tag.CreateParams & { id: string }) =>
  fetch<API.Success>({
    method: 'put',
    url: `${prefix}/${params.id}`,
    params,
    name: '修改标签',
  });

export const deleteTag = (id: string) =>
  fetch<API.Success>({
    method: 'delete',
    url: `${prefix}/${id}`,
    name: '删除标签',
  });
