import * as React from 'react';

import {
  DataSource,
  ResourceCollection,
  ResourceCollectionLayer,
  ResourceLayer,
  SortInfoOrder
} from 'webpanel-data';

import { CommentsForm } from './CommentsForm';
import { CommentsList } from './CommentsList';
import { ResourceCard } from 'webpanel-antd';

export interface ICommentsProps {
  dataSource: DataSource;
  referenceID: string | number;
  initialValues: { [key: string]: any };
  inputPosition?: 'top' | 'bottom';
}

export class Comments extends React.Component<ICommentsProps> {
  public render() {
    const { dataSource } = this.props;
    return (
      <ResourceCollectionLayer
        name="comments"
        key={`job_comments_${this.props.referenceID}`}
        fields={[
          'id',
          'text',
          'createdBy',
          'createdByUser { family_name given_name }',
          'createdAt'
        ]}
        initialFilters={{ job: { id: this.props.referenceID } }}
        initialSorting={[
          { columnKey: 'createdAt', order: SortInfoOrder.descend }
        ]}
        initialLimit={10}
        initialOffset={0}
        dataSource={dataSource}
        render={(comments: ResourceCollection) => (
          <ResourceCard observedResource={comments} title="Komentáře">
            {this.props.inputPosition === 'top' && (
              <div style={{ marginBottom: '10px' }}>
                {this.commentsForm(comments)}
              </div>
            )}
            <div
              style={{
                maxHeight: '512px'
              }}
            >
              <CommentsList
                items={comments.data || undefined}
                loadMore={() =>
                  comments.updateLimit((comments.limit || 0) + 10)
                }
                hasMore={
                  !comments.loading &&
                  comments.limit !== undefined &&
                  comments.count !== undefined &&
                  comments.count > comments.limit
                }
                onDelete={async item => {
                  await comments.delete(item.id);
                  await comments.get();
                }}
              />
            </div>
            {(this.props.inputPosition === undefined ||
              this.props.inputPosition === 'bottom') &&
              this.commentsForm(comments)}
          </ResourceCard>
        )}
      />
    );
  }

  private commentsForm(comments: ResourceCollection) {
    const { initialValues, dataSource } = this.props;
    return (
      <ResourceLayer
        name="Comment"
        dataSource={dataSource}
        fields={['text']}
        initialValues={initialValues}
        render={resource => (
          <CommentsForm
            resource={resource}
            onMessageSent={() => comments.reload()}
          />
        )}
      />
    );
  }
}