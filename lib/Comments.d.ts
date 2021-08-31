/// <reference types="react" />
import { DataSource } from "webpanel-data";
import { ResourceID } from "webpanel-data";
import { TextAreaProps } from "antd/lib/input";
export interface ICommentsProps {
    dataSource: DataSource;
    reference: string;
    referenceID: ResourceID;
    inputPosition?: "top" | "bottom";
    textareaProps?: TextAreaProps;
    canDelete?: (item: any) => boolean;
}
export declare const Comments: (props: ICommentsProps) => JSX.Element;
