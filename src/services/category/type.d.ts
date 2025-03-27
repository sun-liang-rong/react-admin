/* eslint-disable @typescript-eslint/no-unused-vars */
export namespace Category {
  type CategoryItem = {
    id: string;
    categoryName: string;
    createTime: string;
    updateTime: string;
  };

  type ListResult = {
    data: CategoryItem[];
    total: number;
  };

  type CreateParams = {
    categoryName: string;
  };

  type ListParams = API.PageParams & {};
}
