import * as React from "react";
import { DataSource } from "webpanel-data";
import { ResourceID } from "webpanel-data";
import { TextAreaProps } from "antd/lib/input";
export interface ICommentsProps {
    dataSource: DataSource;
    reference: string;
    referenceID: ResourceID;
    inputPosition?: "top" | "bottom";
    textareaProps?: TextAreaProps;
}
export declare class Comments extends React.Component<ICommentsProps> {
    render(): JSX.Element;
    private commentsForm;
}
