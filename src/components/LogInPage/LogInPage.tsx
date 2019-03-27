import React, { Component } from 'react';

import { LogInForm } from '.';
import { SignUpLink } from '../SignUpPage';
import { PasswordForgetLink } from '../PasswordForgetPage';

class LogInPage extends Component {
    render() {
        return (
            <div
                className="form-signin-wrapper"
                style={{
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(216, 195, 2, 0.15)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <LogInForm />
                <PasswordForgetLink />
                <SignUpLink />
            </div>
        );
    }
}

export default LogInPage;
