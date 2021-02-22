import * as React from "react";

import { Form, Input, message } from "antd";

import FormItem from "antd/lib/form/FormItem";
import { Resource } from "webpanel-data";

export interface ICommentsFormProps {
  resource: Resource;
  onMessageSent?: () => void;
}
export const CommentsForm = (props: ICommentsFormProps) => {
  const { resource, onMessageSent } = props;
  const [form] = Form.useForm();

  const onSuccess = async (values: any) => {
    try {
      await resource.save(values);
      message.success("Vaše zpráva byla úspěšně odeslána");
      if (onMessageSent) {
        onMessageSent();
      }
      form.resetFields();
    } catch (err) {
      message.success("Během odesílání došlo k chybě");
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
          autoSize={{ minRows: 1, maxRows: 3 }}
          placeholder="Comment's text"
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
