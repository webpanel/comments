/// <reference types="react" />
import { DataSource } from "webpanel-data";
import { CardProps } from "antd/lib/card";
import { TextAreaProps } from "antd/lib/input";
import { ResourceID } from "webpanel-data";
export interface ICommentsProps {
    dataSource: DataSource;
    reference: string;
    referenceID: ResourceID;
    inputPosition?: "top" | "bottom";
    textareaProps?: TextAreaProps;
    cardProps?: CardProps;
    canDelete?: (item: any) => boolean;
    onDeleted?: (item: any) => void;
    onCreated?: (item: any) => void;
}
export declare const Comments: (props: ICommentsProps) => JSX.Element;
