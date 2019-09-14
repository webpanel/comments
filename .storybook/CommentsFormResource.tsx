import 'react-chat-widget/lib/styles.css';

import * as React from 'react';

import { Input as AInput, Button, message } from 'antd';
import { DataSource, Resource, ResourceLayer } from 'webpanel-data';
import { FormField, Input, ResourceForm } from 'webpanel-antd';

import { FormContext } from 'webpanel-antd/lib/form/form/Form';
import { api } from '../../model/api';

export interface ICommentsFormProps {
  dataSource: DataSource;
  referenceID: string | number;
  initialValues: { [key: string]: any };
  onMessageSent?: () => void;
}
export class CommentsFormResource extends React.Component<ICommentsFormProps> {
  public render() {
    const { dataSource, initialValues } = this.props;
    return (
      <ResourceLayer
        name="Comment"
        dataSource={dataSource}
        fields={['text']}
        initialValues={initialValues}
        render={(resource: Resource) => (
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
                  <Input
                    placeholder="Comment's text"
                    disabled={resource.loading}
                  />
                </FormField>
                <Button htmlType="submit" loading={resource.loading}>
                  Send
                </Button>
              </AInput.Group>
            )}
          />
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
