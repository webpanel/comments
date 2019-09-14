import * as React from 'react';
import { DataSource } from 'webpanel-data';
import { ResourceID } from 'webpanel-data';
export interface ICommentsProps {
    dataSource: DataSource;
    reference: string;
    referenceID: ResourceID;
    inputPosition?: 'top' | 'bottom';
}
export declare class Comments extends React.Component<ICommentsProps> {
    render(): JSX.Element;
    private commentsForm;
}
