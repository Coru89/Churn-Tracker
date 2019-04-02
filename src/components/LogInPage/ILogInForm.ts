import { RouteComponentProps } from 'react-router-dom';

export interface ILogInFormProps extends RouteComponentProps<any> {
    firebase: any;
}

export interface ILogInFormState {
    email: string;
    error: ILogInError;
    username: string;
    password: string;
    [x: number]: any;
}

export interface ILogInError {
    message: string;
}
