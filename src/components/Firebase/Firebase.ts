import app from 'firebase/app';
import 'firebase/auth';
import {
    IFirebaseCredentials,
    IFirebaseAuth,
    IFirebasePassword,
    IFirebaseEmail,
} from '.';
import { any } from 'prop-types';

const config = {
    apiKey: 'AIzaSyDJ3W34BVWOu66UUkVKiIlhn4nQB6loAzo',
    authDomain: 'churn-track.firebaseapp.com',
    databaseURL: 'https://churn-track.firebaseio.com',
    projectId: 'churn-track',
    storageBucket: 'churn-track.appspot.com',
    messagingSenderId: '412843179033',
};

class Firebase {
    auth: app.auth.Auth;

    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    createUserWithEmailAndPassword = (
        creds: IFirebaseCredentials,
        auth: IFirebaseAuth,
    ) => {
        auth.auth.createUserWithEmailAndPassword(creds.email, creds.password);
    };

    signInWithEmailAndPassword = (
        creds: IFirebaseCredentials,
        auth: IFirebaseAuth,
    ) => {
        auth.auth.signInWithEmailAndPassword(creds.email, creds.password);
    };

    signOut = (auth: IFirebaseAuth) => {
        auth.auth.signOut();
    };

    passwordReset = (email: IFirebaseEmail, auth: IFirebaseAuth) => {
        auth.auth.sendPasswordResetEmail(email.email);
    };

    passwordUpdate = (creds: IFirebasePassword, auth: IFirebaseAuth) => {
        if (auth.auth.currentUser) {
            auth.auth.currentUser.updatePassword(creds.password);
        }
    };
}

export default Firebase;
