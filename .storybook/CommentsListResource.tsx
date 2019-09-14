import 'react-chat-widget/lib/styles.css';

import * as InfiniteScroll from 'react-infinite-scroller';
import * as React from 'react';
import * as moment from 'moment';

import {
  ResourceCollection,
  ResourceCollectionLayer,
  SortInfoOrder
} from 'webpanel-data';

import { CommentsForm } from './form';
import { DeleteButton } from '../delete-button';
import { List } from 'antd';
import { ResourceCard } from 'webpanel-antd';
import { api } from '../../model/api';
import { hasAccess } from 'webpanel-auth';

export interface ICommentsListProps {
  referenceID: string | number;
  inputPosition?: 'top' | 'bottom';
}

export class CommentsList extends React.Component<ICommentsListProps> {
  public render() {
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
        dataSource={api}
        render={(comments: ResourceCollection) => (
          <ResourceCard observedResource={comments} title="Komentáře">
            {this.props.inputPosition === 'top' && (
              <div style={{ marginBottom: '10px' }}>
                <CommentsForm
                  referenceID={this.props.referenceID}
                  onMessageSent={() => comments.reload()}
                />
              </div>
            )}
            <div
              style={{
                overflow: 'scroll',
                maxHeight: '512px'
              }}
            >
              <InfiniteScroll
                threshold={64}
                loadMore={() =>
                  comments.updateLimit((comments.limit || 0) + 10)
                }
                useWindow={false}
                hasMore={
                  !comments.loading &&
                  comments.limit !== undefined &&
                  comments.count !== undefined &&
                  comments.count > comments.limit
                }
              >
                <List
                  size="small"
                  itemLayout="horizontal"
                  dataSource={comments.data || undefined}
                  renderItem={(item: any) => (
                    <List.Item>
                      <List.Item.Meta
                        title={
                          <div>
                            {item.createdByUser
                              ? `${item.createdByUser.given_name} ${item.createdByUser.family_name}`
                              : 'Unknown'}{' '}
                            {item.createdAt
                              ? `(${moment(item.createdAt).calendar()})`
                              : ''}
                          </div>
                        }
                        description={
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between'
                            }}
                          >
                            <div style={{ margin: 'auto 0' }}>{item.text}</div>
                            {hasAccess('deleteComment') && (
                              <DeleteButton
                                onDelete={async () => {
                                  await comments.delete(item.id);
                                  await comments.get();
                                }}
                              />
                            )}
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </InfiniteScroll>
            </div>
            {(this.props.inputPosition === undefined ||
              this.props.inputPosition === 'bottom') && (
              <CommentsForm
                referenceID={this.props.referenceID}
                onMessageSent={() => comments.reload()}
              />
            )}
          </ResourceCard>
        )}
      />
    );
  }
}
