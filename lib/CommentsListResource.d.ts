import 'react-chat-widget/lib/styles.css';
import * as React from 'react';
export interface ICommentsListProps {
    referenceID: string | number;
    inputPosition?: 'top' | 'bottom';
}
export declare class CommentsList extends React.Component<ICommentsListProps> {
    render(): JSX.Element;
}
