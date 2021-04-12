var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as InfiniteScroll from "react-infinite-scroller";
import * as React from "react";
import * as moment from "moment";
import { DeleteButton } from "./delete-button";
import { List } from "antd";
var CommentsList = /** @class */ (function (_super) {
    __extends(CommentsList, _super);
    function CommentsList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommentsList.prototype.render = function () {
        var _a = this.props, items = _a.items, hasMore = _a.hasMore, loadMore = _a.loadMore, onDelete = _a.onDelete;
        return (React.createElement("div", { style: {
                overflow: "scroll",
                maxHeight: "512px",
            } },
            React.createElement(InfiniteScroll, { threshold: 64, loadMore: loadMore, useWindow: false, hasMore: hasMore },
                React.createElement(List, { size: "small", itemLayout: "horizontal", dataSource: items, renderItem: function (item) { return (React.createElement(List.Item, null,
                        React.createElement(List.Item.Meta, { title: React.createElement("div", null,
                                item.createdByUser
                                    ? item.createdByUser.given_name + " " + item.createdByUser.family_name
                                    : "Unknown",
                                " ",
                                item.createdAt
                                    ? "(" + moment(item.createdAt).format("l") + " " + moment(item.createdAt).format("LT") + ")"
                                    : ""), description: React.createElement("div", { style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                } },
                                React.createElement("div", { style: { margin: "auto 0", whiteSpace: "pre-wrap" } }, item.text),
                                React.createElement(DeleteButton, { onDelete: function () { return onDelete(item); } })) }))); } }))));
    };
    return CommentsList;
}(React.Component));
export { CommentsList };
//# sourceMappingURL=CommentsList.js.map