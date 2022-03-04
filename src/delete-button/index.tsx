import * as React from "react";

import { Button, Popconfirm } from "antd";

import { DeleteOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

export interface IDeleteButtonProps {
  onDelete: () => void;
}

export const DeleteButton = (props: IDeleteButtonProps) => {
  const { t } = useTranslation("webpanel-comments");
  return (
    <Popconfirm
      title={t("delete_confirm_title")}
      cancelText={t("no")}
      okText={t("yes")}
      onConfirm={() => props.onDelete()}
    >
      <Button danger={true} size="small">
        <DeleteOutlined />
      </Button>
    </Popconfirm>
  );
};
