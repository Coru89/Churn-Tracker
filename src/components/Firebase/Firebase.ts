import app from 'firebase/app';
import 'firebase/auth';
import {
    IFirebaseCredentials,
    IFirebaseAuth,
    IFirebasePassword,
    IFirebaseEmail,
} from '.';

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

    createUserWithEmailAndPassword = (creds: IFirebaseCredentials) => {
        this.auth.createUserWithEmailAndPassword(creds.email, creds.password);
    };

    signInWithEmailAndPassword = (creds: IFirebaseCredentials) => {
        this.auth.signInWithEmailAndPassword(creds.email, creds.password);
    };

    signOut = () => {
        this.auth.signOut();
    };

    passwordReset = (email: IFirebaseEmail) => {
        this.auth.sendPasswordResetEmail(email.email);
    };

    passwordUpdate = (creds: IFirebasePassword) => {
        if (this.auth.currentUser) {
            this.auth.currentUser.updatePassword(creds.password);
        }
    };
}

export default Firebase;
