import * as React from "react";

import { Input as AInput, Button, message } from "antd";
import { Input, ResourceForm } from "webpanel-antd";

import FormItem from "antd/lib/form/FormItem";
import { Resource } from "webpanel-data";

export interface ICommentsFormProps {
  resource: Resource;
  onMessageSent?: () => void;
}
export class CommentsForm extends React.Component<ICommentsFormProps> {
  public render() {
    const { resource } = this.props;
    return (
      <ResourceForm onSuccess={this.onSuccess} formResource={resource}>
        <AInput.Group className="display-flex">
          <FormItem
            className="full-width"
            label="text"
            rules={[{ required: true }]}
            style={{ marginBottom: 0 }}
          >
            <Input placeholder="Comment's text" disabled={resource.loading} />
          </FormItem>
          <Button htmlType="submit" loading={resource.loading}>
            Odeslat
          </Button>
        </AInput.Group>
      </ResourceForm>
    );
  }

  private onSuccess = () => {
    const { onMessageSent } = this.props;
    message.success("Vaše zpráva byla úspěšně odeslána");
    if (onMessageSent) {
      onMessageSent();
    }
    // context.form.resetFields();
  };
}
