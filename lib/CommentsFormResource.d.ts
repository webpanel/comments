import 'react-chat-widget/lib/styles.css';
import * as React from 'react';
import { DataSource } from 'webpanel-data';
export interface ICommentsFormProps {
    dataSource: DataSource;
    referenceID: string | number;
    initialValues: {
        [key: string]: any;
    };
    onMessageSent?: () => void;
}
export declare class CommentsFormResource extends React.Component<ICommentsFormProps> {
    render(): JSX.Element;
    private onSuccess;
}
