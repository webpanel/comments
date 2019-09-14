var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import { ResourceCollectionLayer, ResourceLayer, SortInfoOrder } from 'webpanel-data';
import { CommentsForm } from './CommentsForm';
import { CommentsList } from './CommentsList';
import { ResourceCard } from 'webpanel-antd';
var Comments = /** @class */ (function (_super) {
    __extends(Comments, _super);
    function Comments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Comments.prototype.render = function () {
        var _this = this;
        var dataSource = this.props.dataSource;
        return (React.createElement(ResourceCollectionLayer, { name: "comments", key: "job_comments_" + this.props.referenceID, fields: [
                'id',
                'text',
                'createdBy',
                'createdByUser { family_name given_name }',
                'createdAt'
            ], initialFilters: { job: { id: this.props.referenceID } }, initialSorting: [
                { columnKey: 'createdAt', order: SortInfoOrder.descend }
            ], initialLimit: 10, initialOffset: 0, dataSource: dataSource, render: function (comments) { return (React.createElement(ResourceCard, { observedResource: comments, title: "Koment\u00E1\u0159e" },
                _this.props.inputPosition === 'top' && (React.createElement("div", { style: { marginBottom: '10px' } }, _this.commentsForm(comments))),
                React.createElement("div", { style: {
                        maxHeight: '512px'
                    } },
                    React.createElement(CommentsList, { items: comments.data || undefined, loadMore: function () {
                            return comments.updateLimit((comments.limit || 0) + 10);
                        }, hasMore: !comments.loading &&
                            comments.limit !== undefined &&
                            comments.count !== undefined &&
                            comments.count > comments.limit, onDelete: function (item) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, comments.delete(item.id)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, comments.get()];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); } })),
                (_this.props.inputPosition === undefined ||
                    _this.props.inputPosition === 'bottom') &&
                    _this.commentsForm(comments))); } }));
    };
    Comments.prototype.commentsForm = function (comments) {
        var _a = this.props, initialValues = _a.initialValues, dataSource = _a.dataSource;
        return (React.createElement(ResourceLayer, { name: "Comment", dataSource: dataSource, fields: ['text'], initialValues: initialValues, render: function (resource) { return (React.createElement(CommentsForm, { resource: resource, onMessageSent: function () { return comments.reload(); } })); } }));
    };
    return Comments;
}(React.Component));
export { Comments };
//# sourceMappingURL=Comments.js.map