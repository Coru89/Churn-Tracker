import { RouteComponentProps } from 'react-router-dom';

export interface IAddCardProps extends RouteComponentProps<any> {
    toggleNav: any;
    firebase: any;
}

export interface IAddCardState {
    error: string;
    name: string;
    type: string;
}
