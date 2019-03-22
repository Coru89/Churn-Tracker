import React from 'react';
import { FirebaseContext } from '../Firebase';

import { SignUpForm } from '.';

const SignUpPage = () => (
    <div>
        <h1>Sign Up</h1>
        <FirebaseContext.Consumer>
            {firebase => <SignUpForm firebase={firebase} />}
        </FirebaseContext.Consumer>
    </div>
);

export default SignUpPage;
