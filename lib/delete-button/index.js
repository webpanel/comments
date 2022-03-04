import * as React from "react";
import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
export var DeleteButton = function (props) {
    var t = useTranslation("webpanel-comments").t;
    return (React.createElement(Popconfirm, { title: t("delete_confirm_title"), cancelText: t("no"), okText: t("yes"), onConfirm: function () { return props.onDelete(); } },
        React.createElement(Button, { danger: true, size: "small" },
            React.createElement(DeleteOutlined, null))));
};
//# sourceMappingURL=index.js.map