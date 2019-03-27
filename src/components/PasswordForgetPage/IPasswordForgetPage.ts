export interface IPasswordForgetForm {
    email: string;
    error: IPasswordForgetError;
    firebase: any;
}

export interface IPasswordForgetError {
    message: string;
}
