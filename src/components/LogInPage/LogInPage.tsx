import React, { Component } from 'react';

import { AuthUserContext, withAuthentication } from '../Session';
import { withRouter, Redirect } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
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
                    {(authUser: any) =>
                        authUser ? (
                            <Redirect to={ROUTES.HOME} />
                        ) : (
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
                        )
                    }
                </AuthUserContext.Consumer>
            </React.Fragment>
        );
    }
}

export default withAuthentication(withRouter(LogInPage));
