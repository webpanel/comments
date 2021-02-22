import * as InfiniteScroll from "react-infinite-scroller";
import * as React from "react";
import * as moment from "moment";

import { DeleteButton } from "./delete-button";
import { List } from "antd";

export interface ICommentListItem {
  id: string;
  text: string;
  createdAt: string;
  createdByUser: { given_name?: string; family_name?: string };
}

export interface ICommentsListProps {
  items: ICommentListItem[] | undefined;
  hasMore: boolean;
  loadMore: (page: number) => void;
  onDelete: (item: ICommentListItem) => void;
}

export class CommentsList extends React.Component<ICommentsListProps> {
  public render() {
    const { items, hasMore, loadMore, onDelete } = this.props;

    return (
      <div
        style={{
          overflow: "scroll",
          maxHeight: "512px",
        }}
      >
        <InfiniteScroll
          threshold={64}
          loadMore={loadMore}
          useWindow={false}
          hasMore={hasMore}
        >
          <List
            size="small"
            itemLayout="horizontal"
            dataSource={items}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <div>
                      {item.createdByUser
                        ? `${item.createdByUser.given_name} ${item.createdByUser.family_name}`
                        : "Unknown"}{" "}
                      {item.createdAt
                        ? `(${moment(item.createdAt).calendar()})`
                        : ""}
                    </div>
                  }
                  description={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ margin: "auto 0", whiteSpace: "pre-wrap" }}>
                        {item.text}
                      </div>
                      <DeleteButton onDelete={() => onDelete(item)} />
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    );
  }
}
