/// <reference types="react" />
import { Resource } from "webpanel-data";
export interface ICommentsFormProps {
    resource: Resource;
    onMessageSent?: () => void;
}
export declare const CommentsForm: (props: ICommentsFormProps) => JSX.Element;
