import * as React from "react";

import { DataSource, ResourceCollection, useResource } from "webpanel-data";

import { CardProps } from "antd/lib/card";
import { TextAreaProps } from "antd/lib/input";
import { useTranslation } from "react-i18next";
import { ResourceCard } from "webpanel-antd";
import { ResourceID } from "webpanel-data";
import { CommentsForm } from "./CommentsForm";
import { CommentsList } from "./CommentsList";
import { useCommentsResourceCollection } from "./resource-collection";

export interface ICommentsProps {
  dataSource: DataSource;
  reference: string;
  referenceID: ResourceID;
  inputPosition?: "top" | "bottom";
  textareaProps?: TextAreaProps;
  cardProps?: CardProps;
  canDelete?: (item: any) => boolean;
  onDeleted?: (item: any) => void;
  onCreated?: (item: any) => void;
}

const CommentsFormInstance = (
  props: ICommentsProps & { comments: ResourceCollection<any> }
) => {
  const {
    dataSource,
    reference,
    referenceID,
    textareaProps,
    comments,
    onCreated,
  } = props;
  const resource = useResource({
    name: "Comment",
    dataSource: dataSource,
    fields: ["text"],
    initialValues: { reference, referenceID },
  });
  return (
    <CommentsForm
      resource={resource}
      onMessageSent={(item) => {
        comments.reload();
        if (onCreated) {
          onCreated(item);
        }
      }}
      textareaProps={textareaProps}
    />
  );
};

export const Comments = (props: ICommentsProps) => {
  const { t } = useTranslation("webpanel-comments");
  const { dataSource, reference, referenceID, canDelete, onDeleted } = props;
  const comments = useCommentsResourceCollection({
    dataSource,
    reference,
    referenceID,
  });

  return (
    <ResourceCard
      title={t("comments_card_title")}
      {...props.cardProps}
      observedResource={comments}
    >
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
          canDelete={canDelete}
          onDelete={async (item) => {
            await comments.delete(item.id);
            await comments.get();
            if (onDeleted) {
              onDeleted(item);
            }
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
