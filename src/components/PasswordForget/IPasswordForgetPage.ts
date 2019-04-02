export interface IPasswordForgetFormProps {
    firebase: any;
}
export interface IPasswordForgetFormState {
    email: string;
    error: IPasswordForgetError;
    [x: number]: any;
}

export interface IPasswordForgetError {
    message: string;
}
