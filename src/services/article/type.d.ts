/* eslint-disable @typescript-eslint/no-unused-vars */
export namespace Article {
  type ArticleItem = {
    id: string;
    title: string;
    content: string;
    readingNum: number;
    summary: string;
    categories: {
      categoryName: string;
      id: string;
    }[];
    tags: {
      tagName: string;
      id: string;
    }[];
    coverImage: string;
    createTime: string;
    updateTime: string;
  };

  type ListResult = {
    data: ArticleItem[];
    total: number;
  };

  type CreateParams = {
    content: string;
    title: string;
    categoryId: string[];
    tagIds: string[];
    summary: string;
    coverImage: string;
  };

  type EditParams = CreateParams & {
    articleId: string;
  };

  type ListParams = API.PageParams & {
    id?: string;
    tagIds?: string[];
    title?: string;
  };

  type ArticleDetailResult = ArticleItem & {};
}
