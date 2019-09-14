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
import { ResourceID } from 'webpanel-data';

export interface ICommentsProps {
  dataSource: DataSource;
  reference: string;
  referenceID: ResourceID;
  inputPosition?: 'top' | 'bottom';
}

export class Comments extends React.Component<ICommentsProps> {
  public render() {
    const { dataSource, reference, referenceID } = this.props;
    return (
      <ResourceCollectionLayer
        name="comments"
        key={`job_comments_${reference}_${referenceID}`}
        fields={[
          'id',
          'text',
          'createdBy',
          'createdByUser { family_name given_name }',
          'createdAt'
        ]}
        initialFilters={{ reference, referenceID }}
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
    const { dataSource, reference, referenceID } = this.props;
    return (
      <ResourceLayer
        name="Comment"
        dataSource={dataSource}
        fields={['text']}
        initialValues={{ reference, referenceID }}
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
