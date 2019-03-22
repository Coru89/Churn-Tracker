import { string } from 'prop-types';

export interface ISignUpFormProps {
    email?: string;
    error?: ISignUpError;
    username?: string;
    password?: string;
    password2?: string;
    firebase: any;
}

export interface ISignUpError {
    message?: string;
}
