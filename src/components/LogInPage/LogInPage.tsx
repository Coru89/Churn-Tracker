import React, { Component } from 'react';

import { AuthUserContext } from '../Session';

import { LogInForm, ILoginPageProps } from '.';
import { SignUpLink } from '../SignUpPage';
import { PasswordForgetLink } from '../PasswordForget';

class LogInPage extends Component<ILoginPageProps> {
    componentDidMount() {
        this.props.toggleNav();
    }

    componentWillUnmount() {
        this.props.toggleNav();
    }

    render() {
        return (
            <React.Fragment>
                <AuthUserContext.Consumer>
                    {authUser =>
                        authUser === null ? (
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
                        ) : null
                    }
                </AuthUserContext.Consumer>
            </React.Fragment>
        );
    }
}

export default LogInPage;
