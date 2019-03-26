import { RouteComponentProps } from 'react-router-dom';

export interface ISignUpFormProps extends RouteComponentProps<any> {
    email?: string;
    error?: ISignUpError;
    username?: string;
    password?: string;
    password2?: string;
    firebase: any;
}

export interface ISignUpError {
    message: string;
}
