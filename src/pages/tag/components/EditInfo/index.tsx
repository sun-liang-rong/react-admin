import ProModal from '@/proComponents/Modal';
import { Form, Input, Select } from '@arco-design/web-react';
import { IconStar, IconDelete } from '@arco-design/web-react/icon';
import { createTag, editTag } from '@/services/tag';
import React from 'react';
import { Color } from 'bizcharts/lib/plots/core/dependents';
const Option = Select.Option;
const FormItem = Form.Item;
interface Props {
  onCancel: () => void;
  reload: () => void;
  selectInfo: API.Tag.TagItem | null;
}
interface ColorInfo {
  code: string;
  description: string;
}
function EditTagInfo(props: Props) {
  const data: ColorInfo[] = [
    { code: '#8B5FBF', description: '深紫色调，适合背景或强调色' },
    { code: '#FF6B6B', description: '柔和的珊瑚红，适合按钮或警示' },
    { code: '#4ECDC4', description: '清新的蓝绿色，适合科技感界面' },
    { code: '#FFD93D', description: '明亮的柠檬黄，适合高亮元素' },
    { code: '#2F3542', description: '深灰蓝色，适合文字或边框' },
    { code: '#FF9F43', description: '温暖的橙黄色，适合促销标签' },
    { code: '#6C5CE7', description: '宝石蓝紫色，适合渐变搭配' },
    { code: '#00B894', description: '自然的薄荷绿，适合生态主题' },
    { code: '#D63031', description: '暗红色，适合错误提示或警告' },
    { code: '#A4B0BE', description: '浅灰蓝色，适合中性背景' },
  ];
  const { onCancel, reload, selectInfo } = props;
  const [form] = Form.useForm();
  const onOk = async (values: API.Tag.CreateParams) => {
    if (selectInfo) {
      await editTag({
        ...values,
        tagId: selectInfo.id,
      });
    } else {
      await createTag(values);
    }
    reload();
    return true;
  };
  return (
    <ProModal
      form={form}
      width={520}
      title={`${selectInfo ? '编辑' : '新增'}标签`}
      onCancel={onCancel}
      onSubmit={onOk}
      visible
    >
      <Form
        form={form}
        labelCol={{
          flex: '100px',
        }}
        wrapperCol={{
          flex: 'auto',
        }}
        initialValues={selectInfo}
      >
        <FormItem
          label="标签名称"
          field="tagName"
          rules={[{ required: true, message: '请输入标签名称' }]}
        >
          <Input autoComplete="off" placeholder="请输入" />
        </FormItem>
        <FormItem
          label="标签颜色"
          field="tagColor"
          rules={[{ required: true, message: '请选择标签颜色' }]}
        >
          <Select
            placeholder='请选择标签颜色'
            style={{ width: 345, }}
            renderFormat={(option, value) => {
              return option ? (
                <span>
                  <IconStar style={{ color: '#f7ba1e', }} />
                  {` ${option.value} `}
                </span>
              ) : (
                value
              );
            }}
          >
            {data.map((item, index) => (
              <Option style={{backgroundColor: item.code, color: '#fff'}} value={item.code} key={index}>
                {item.description}
              </Option>
            ))}
          </Select>
        </FormItem>
      </Form>
    </ProModal>
  );
}

export default React.memo(EditTagInfo);
