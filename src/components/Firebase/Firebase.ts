import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {
    IFirebaseCredentials,
    IFirebase,
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
    auth: IFirebase['auth'];
    db: IFirebase['db'];

    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }

    // *** Authentication API ***

    createUserWithEmailAndPassword = (creds: IFirebaseCredentials) => {
        this.auth.createUserWithEmailAndPassword(creds.email, creds.password);
    };

    signInWithEmailAndPassword = (creds: IFirebaseCredentials) => {
        this.auth.signInWithEmailAndPassword(creds.email, creds.password);
    };

    signOut = () => {
        this.auth.signOut();
    };

    passwordReset = (email: IFirebaseEmail['email']) => {
        this.auth.sendPasswordResetEmail(email);
    };

    passwordUpdate = (password: IFirebasePassword['password']) => {
        const user = this.auth.currentUser;

        if (user) {
            user.updatePassword(password);
        }
    };

    // *** User API ***

    // get a reference of a user based on UID
    user = (uid: string) => this.db.ref(`users/${uid}`);

    // get a reference of all users
    users = () => this.db.ref('users');
}

export default Firebase;
