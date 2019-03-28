import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange/PasswordChangeForm';
import { withAuthorization } from '../Session';
import { AuthUserContext } from '../Session';

const AccountPage = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser => (authUser ? <AccountPageAuth /> : null)}
        </AuthUserContext.Consumer>
    </div>
);

const AccountPageAuth = () => (
    <div>
        <h1>Account Page</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
    </div>
);

const condition = (authUser: any) => !!authUser;

export default withAuthorization(condition)(AccountPage);
