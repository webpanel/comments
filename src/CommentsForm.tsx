import * as React from "react";

import { Form, Input, message } from "antd";

import FormItem from "antd/lib/form/FormItem";
import { Resource } from "webpanel-data";
import { TextAreaProps } from "antd/lib/input";

export interface ICommentsFormProps {
  resource: Resource;
  onMessageSent?: () => void;
  textareaProps?: TextAreaProps;
}
export const CommentsForm = (props: ICommentsFormProps) => {
  const { resource, onMessageSent, textareaProps } = props;
  const [form] = Form.useForm();

  const res = new Resource({
    name: resource.name,
    dataSource: resource.dataSource,
    fields: ["text"],
    initialValues: resource.data,
  });
  const onSuccess = async (values: any) => {
    try {
      await res.save(values);
      message.success("Vaše zpráva byla úspěšně odeslána");
      if (onMessageSent) {
        onMessageSent();
      }
      form.resetFields();
    } catch (err) {
      message.error("Během odesílání došlo k chybě");
    }
  };

  return (
    <Form onFinish={onSuccess} form={form}>
      <FormItem
        className="full-width"
        name="text"
        rules={[{ required: true }]}
        style={{ marginBottom: 0 }}
      >
        <Input.TextArea
          autoSize={{ minRows: 1, maxRows: 4 }}
          placeholder="Comment's text"
          {...textareaProps}
          disabled={resource.loading}
          onPressEnter={(e) => {
            if (!e.shiftKey) {
              e.preventDefault();
              form.submit();
            }
          }}
        />
      </FormItem>
    </Form>
  );
};
