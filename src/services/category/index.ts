import fetch from '@/utils/fetch';
const prefix = '/categories';

export const getCategoryList = (params: API.Category.ListParams) =>
  fetch<API.Category.ListResult>({
    method: 'get',
    url: `${prefix}`,
    params,
    name: '获取分类列表',
  });

export const createCategory = (params: API.Category.CreateParams) =>
  fetch<API.Success>({
    method: 'post',
    url: `${prefix}`,
    params,
    name: '创建分类',
  });

export const editCategory = (
  params: API.Category.CreateParams & { id: string }
) =>
  fetch<API.Success>({
    method: 'put',
    url: `${prefix}/edit`,
    params,
    name: '编辑分类',
  });

export const deleteCategory = (categoryId: string) =>
  fetch<API.Success>({
    method: 'delete',
    url: `${prefix}/delete`,
    params: {
      categoryId,
    },
    name: '删除分类',
  });
