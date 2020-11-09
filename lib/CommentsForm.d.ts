import * as React from "react";
import { Resource } from "webpanel-data";
export interface ICommentsFormProps {
    resource: Resource;
    onMessageSent?: () => void;
}
export declare class CommentsForm extends React.Component<ICommentsFormProps> {
    render(): JSX.Element;
    private onSuccess;
}
