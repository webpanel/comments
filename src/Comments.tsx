import * as React from "react";

import {
  DataSource,
  ResourceCollection,
  SortInfoOrder,
  useResource,
  useResourceCollection,
} from "webpanel-data";

import { CommentsForm } from "./CommentsForm";
import { CommentsList } from "./CommentsList";
import { ResourceCard } from "webpanel-antd";
import { ResourceID } from "webpanel-data";
import { TextAreaProps } from "antd/lib/input";

export interface ICommentsProps {
  dataSource: DataSource;
  reference: string;
  referenceID: ResourceID;
  inputPosition?: "top" | "bottom";
  textareaProps?: TextAreaProps;
}

const CommentsFormInstance = (
  props: ICommentsProps & { comments: ResourceCollection<any> }
) => {
  const { dataSource, reference, referenceID, textareaProps, comments } = props;
  const resource = useResource({
    name: "Comment",
    dataSource: dataSource,
    fields: ["text"],
    initialValues: { reference, referenceID },
  });
  return (
    <CommentsForm
      resource={resource}
      onMessageSent={() => comments.reload()}
      textareaProps={textareaProps}
    />
  );
};

export const Comments = (props: ICommentsProps) => {
  const { dataSource, reference, referenceID } = props;
  const comments = useResourceCollection({
    name: "comments",
    fields: [
      "id",
      "text",
      "createdBy",
      "createdByUser { family_name given_name }",
      "createdAt",
    ],
    initialFilters: { reference, referenceID },
    initialSorting: [{ columnKey: "createdAt", order: SortInfoOrder.descend }],
    initialLimit: 10,
    initialOffset: 0,
    dataSource: dataSource,
  });
  return (
    <ResourceCard observedResource={comments} title="Komentáře">
      {props.inputPosition === "top" && (
        <div style={{ marginBottom: "10px" }}>
          <CommentsFormInstance {...props} comments={comments} />
        </div>
      )}
      <div
        style={{
          maxHeight: "512px",
        }}
      >
        <CommentsList
          items={comments.data || undefined}
          loadMore={() => comments.updateLimit((comments.limit || 0) + 10)}
          hasMore={
            !comments.loading &&
            comments.limit !== undefined &&
            comments.count !== undefined &&
            comments.count > comments.limit
          }
          onDelete={async (item) => {
            await comments.delete(item.id);
            await comments.get();
          }}
        />
      </div>
      {(props.inputPosition === undefined ||
        props.inputPosition === "bottom") && (
        <CommentsFormInstance {...props} comments={comments} />
      )}
    </ResourceCard>
  );
};
