/// <reference types="react" />
import { Resource } from "webpanel-data";
import { TextAreaProps } from "antd/lib/input";
export interface ICommentsFormProps {
    resource: Resource;
    onMessageSent?: (item: any) => void;
    textareaProps?: TextAreaProps;
}
export declare const CommentsForm: (props: ICommentsFormProps) => JSX.Element;
