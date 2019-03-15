//firebaseConfig.js
//

import app from 'firebase/app';
import 'firebase/auth';

export const config = {
    apiKey: 'AIzaSyDJ3W34BVWOu66UUkVKiIlhn4nQB6loAzo',
    authDomain: 'churn-track.firebaseapp.com',
    databaseURL: 'https://churn-track.firebaseio.com',
    projectId: 'churn-track',
    storageBucket: 'churn-track.appspot.com',
    messagingSenderId: '412843179033',
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;
