import { RouteComponentProps } from 'react-router-dom';

export interface ILogInForm extends RouteComponentProps<any> {
    email?: string;
    error?: ILogInError;
    username?: string;
    password?: string;
    password2?: string;
    firebase: any;
}

export interface ILogInError {
    message: string;
}
