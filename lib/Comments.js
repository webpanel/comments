var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
import * as React from "react";
import { useResource } from "webpanel-data";
import { useTranslation } from "react-i18next";
import { ResourceCard } from "webpanel-antd";
import { CommentsForm } from "./CommentsForm";
import { CommentsList } from "./CommentsList";
import { useCommentsResourceCollection } from "./resource-collection";
var CommentsFormInstance = function (props) {
    var dataSource = props.dataSource, reference = props.reference, referenceID = props.referenceID, textareaProps = props.textareaProps, comments = props.comments, onCreated = props.onCreated;
    var resource = useResource({
        name: "Comment",
        dataSource: dataSource,
        fields: ["text"],
        initialValues: { reference: reference, referenceID: referenceID },
    });
    return (React.createElement(CommentsForm, { resource: resource, onMessageSent: function (item) {
            comments.reload();
            if (onCreated) {
                onCreated(item);
            }
        }, textareaProps: textareaProps }));
};
export var Comments = function (props) {
    var t = useTranslation("webpanel-comments").t;
    var dataSource = props.dataSource, reference = props.reference, referenceID = props.referenceID, canDelete = props.canDelete, onDeleted = props.onDeleted;
    var comments = useCommentsResourceCollection({
        dataSource: dataSource,
        reference: reference,
        referenceID: referenceID,
    });
    return (React.createElement(ResourceCard, __assign({ title: t("comments_card_title") }, props.cardProps, { observedResource: comments }),
        props.inputPosition === "top" && (React.createElement("div", { style: { marginBottom: "10px" } },
            React.createElement(CommentsFormInstance, __assign({}, props, { comments: comments })))),
        React.createElement("div", { style: {
                maxHeight: "512px",
            } },
            React.createElement(CommentsList, { items: comments.data || undefined, loadMore: function () { return comments.updateLimit((comments.limit || 0) + 10); }, hasMore: !comments.loading &&
                    comments.limit !== undefined &&
                    comments.count !== undefined &&
                    comments.count > comments.limit, canDelete: canDelete, onDelete: function (item) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, comments.delete(item.id)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, comments.get()];
                            case 2:
                                _a.sent();
                                if (onDeleted) {
                                    onDeleted(item);
                                }
                                return [2 /*return*/];
                        }
                    });
                }); } })),
        (props.inputPosition === undefined ||
            props.inputPosition === "bottom") && (React.createElement(CommentsFormInstance, __assign({}, props, { comments: comments })))));
};
//# sourceMappingURL=Comments.js.map