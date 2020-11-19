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
import * as React from "react";
import { Input as AInput, Button, message } from "antd";
import { Input, ResourceForm } from "webpanel-antd";
import FormItem from "antd/lib/form/FormItem";
var CommentsForm = /** @class */ (function (_super) {
    __extends(CommentsForm, _super);
    function CommentsForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSuccess = function () {
            var onMessageSent = _this.props.onMessageSent;
            message.success("Vaše zpráva byla úspěšně odeslána");
            if (onMessageSent) {
                onMessageSent();
            }
            // context.form.resetFields();
        };
        return _this;
    }
    CommentsForm.prototype.render = function () {
        var resource = this.props.resource;
        return (React.createElement(ResourceForm, { onSuccess: this.onSuccess, formResource: resource },
            React.createElement(AInput.Group, { className: "display-flex" },
                React.createElement(FormItem, { className: "full-width", name: "text", rules: [{ required: true }], style: { marginBottom: 0 } },
                    React.createElement(Input, { placeholder: "Comment's text", disabled: resource.loading })),
                React.createElement(Button, { htmlType: "submit", loading: resource.loading }, "Odeslat"))));
    };
    return CommentsForm;
}(React.Component));
export { CommentsForm };
//# sourceMappingURL=CommentsForm.js.map