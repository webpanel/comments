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
import 'react-chat-widget/lib/styles.css';
import * as React from 'react';
import { Input as AInput, Button, message } from 'antd';
import { ResourceLayer } from 'webpanel-data';
import { FormField, Input, ResourceForm } from 'webpanel-antd';
var CommentsFormResource = /** @class */ (function (_super) {
    __extends(CommentsFormResource, _super);
    function CommentsFormResource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSuccess = function (context) {
            var onMessageSent = _this.props.onMessageSent;
            message.success('Vaše zpráva byla úspěšně odeslána');
            if (onMessageSent) {
                onMessageSent();
            }
            context.form.resetFields();
        };
        return _this;
    }
    CommentsFormResource.prototype.render = function () {
        var _this = this;
        var _a = this.props, dataSource = _a.dataSource, initialValues = _a.initialValues;
        return (React.createElement(ResourceLayer, { name: "Comment", dataSource: dataSource, fields: ['text'], initialValues: initialValues, render: function (resource) { return (React.createElement(ResourceForm, { onSuccess: _this.onSuccess, formResource: resource, render: function (context) { return (React.createElement(AInput.Group, { className: "display-flex" },
                    React.createElement(FormField, { className: "full-width", name: "text", formContext: context, rules: [{ required: true }], style: { marginBottom: 0 } },
                        React.createElement(Input, { placeholder: "Comment's text", disabled: resource.loading })),
                    React.createElement(Button, { htmlType: "submit", loading: resource.loading }, "Send"))); } })); } }));
    };
    return CommentsFormResource;
}(React.Component));
export { CommentsFormResource };
//# sourceMappingURL=CommentsFormResource.js.map