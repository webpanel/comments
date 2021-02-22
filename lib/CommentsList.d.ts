import * as React from "react";
export interface ICommentListItem {
    id: string;
    text: string;
    createdAt: string;
    createdByUser: {
        given_name?: string;
        family_name?: string;
    };
}
export interface ICommentsListProps {
    items: ICommentListItem[] | undefined;
    hasMore: boolean;
    loadMore: (page: number) => void;
    onDelete: (item: ICommentListItem) => void;
}
export declare class CommentsList extends React.Component<ICommentsListProps> {
    render(): JSX.Element;
}
