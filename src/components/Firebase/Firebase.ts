import app, { messaging } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/messaging';
import {
    IFirebaseCredentials,
    IFirebase,
    IFirebasePassword,
    IFirebaseEmail,
} from '.';

const devConfig = {
    apiKey: process.env.REACT_APP_DEV_API_KEY,
    authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
    projectId: process.env.REACT_APP_DEV_PROJECT_ID,
    storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
};

const prodConfig = {
    apiKey: process.env.REACT_APP_PROD_API_KEY,
    authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
    projectId: process.env.REACT_APP_PROD_PROJECT_ID,
    storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

class Firebase {
    auth: IFirebase['auth'];
    db: IFirebase['db'];
    messaging: IFirebase['messaging'];

    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
        this.messaging = app.messaging();

        this.messaging
            .requestPermission()
            .then(() => {
                console.log('have permission');
                return this.messaging.getToken();
            })
            .then(token => {
                console.log(token);
            })
            .catch(error => {
                console.log(error);
            });

        this.messaging.onMessage(payload => {
            console.log('onMessage: ', payload);
        });
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

    cards = (uid: string) => this.db.ref(`users/${uid}/cards`);

    removeCard = (userUID: string, cardUID: string) =>
        this.db.ref(`users/${userUID}/cards/${cardUID}`);
}

export default Firebase;
