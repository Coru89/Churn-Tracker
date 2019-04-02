import { RouteComponentProps } from 'react-router-dom';

export interface ISignUpFormProps extends RouteComponentProps<any> {
    firebase: any;
}

export interface ISignUpFormState {
    email: string;
    error: ISignUpError;
    username: string;
    password: string;
    password2: string;
    [x: number]: any;
}

export interface ISignUpError {
    message: string;
}
