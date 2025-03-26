import { Color } from 'bizcharts/lib/plots/core/dependents';
/* eslint-disable @typescript-eslint/no-unused-vars */
export namespace Tag {
  type TagItem = {
    id: string;
    name: string;
    color: string;
    createTime: string;
    updateTime: string;
  };

  type ListResult = {
    data: TagItem[];
    total: number;
  };

  type CreateParams = {
    tagName: string;
    tagColor: string;
  };

  type ListParams = API.PageParams & {};
}
