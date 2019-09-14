import * as React from 'react';
import { DataSource } from 'webpanel-data';
export interface ICommentsProps {
    dataSource: DataSource;
    referenceID: string | number;
    initialValues: {
        [key: string]: any;
    };
    inputPosition?: 'top' | 'bottom';
}
export declare class Comments extends React.Component<ICommentsProps> {
    render(): JSX.Element;
    private commentsForm;
}
