import * as React from 'react';

import { Input as AInput, Button, message } from 'antd';
import { FormField, Input, ResourceForm } from 'webpanel-antd';

import { FormContext } from 'webpanel-antd/lib/form/form/Form';
import { Resource } from 'webpanel-data';

export interface ICommentsFormProps {
  resource: Resource;
  onMessageSent?: () => void;
}
export class CommentsForm extends React.Component<ICommentsFormProps> {
  public render() {
    const { resource } = this.props;
    return (
      <ResourceForm
        onSuccess={this.onSuccess}
        formResource={resource}
        render={(context: FormContext) => (
          <AInput.Group className="display-flex">
            <FormField
              className="full-width"
              name="text"
              formContext={context}
              rules={[{ required: true }]}
              style={{ marginBottom: 0 }}
            >
              <Input placeholder="Comment's text" disabled={resource.loading} />
            </FormField>
            <Button htmlType="submit" loading={resource.loading}>
              Odeslat
            </Button>
          </AInput.Group>
        )}
      />
    );
  }

  private onSuccess = (context: FormContext) => {
    const { onMessageSent } = this.props;
    message.success('Vaše zpráva byla úspěšně odeslána');
    if (onMessageSent) {
      onMessageSent();
    }
    context.form.resetFields();
  };
}
