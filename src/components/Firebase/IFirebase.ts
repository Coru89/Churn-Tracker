import app from 'firebase/app';
import 'firebase/auth';

export interface IFirebaseCredentials {
    email: IFirebaseEmail['email'];
    password: IFirebasePassword['password'];
}

export interface IFirebasePassword {
    password: string;
}

export interface IFirebaseEmail {
    email: string;
}

export interface IFirebase {
    auth: app.auth.Auth;
    db: app.database.Database;
}
