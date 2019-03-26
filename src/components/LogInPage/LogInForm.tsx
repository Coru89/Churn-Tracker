import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import { ILogInForm } from '.';
import * as ROUTES from '../../constants/routes';

class LogInFormBase extends Component<ILogInForm> {
    // constructor(props) {
    //     super(props);
    // }

    // init state
    state = {
        username: '',
        email: '',
        password: '',
        error: {
            code: '',
            message: '',
        },
    };

    onChange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e: any) => {
        this.props.firebase.auth
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.setState({ ...this.state });
                this.props.history.push(ROUTES.HOME);
            })
            .catch((error: any) => {
                console.log(error);
                this.setState({ error });
            });

        e.preventDefault();
    };

    render() {
        return (
            <form
                onSubmit={this.onSubmit}
                className="form-signin"
                style={{
                    maxWidth: '330px',
                    width: '100%',
                    padding: '10px',
                    textAlign: 'center',
                }}
            >
                <h1 className="h1 mb-4 font-weight-bold">Churn.</h1>
                <h5 className="h5 mb-3 font-weight-normal">Please sign in</h5>
                <label htmlFor="inputEmail" className="sr-only">
                    Email address
                </label>
                <input
                    name="email"
                    type="email"
                    onChange={this.onChange}
                    id="inputEmail"
                    className="form-control mb-2"
                    placeholder="Email address"
                    value={this.props.email}
                />
                <label htmlFor="inputPassword" className="sr-only">
                    Password
                </label>
                <input
                    name="password"
                    type="password"
                    onChange={this.onChange}
                    id="inputPassword"
                    className="form-control mb-3"
                    placeholder="Password"
                    value={this.props.password}
                />
                <div className="checkbox mb-3">
                    <input
                        type="checkbox"
                        value="remember-me"
                        className="mr-1"
                    />
                    <label>Remember me</label>
                </div>
                <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                    style={{
                        backgroundColor: '#28a745',
                        borderColor: '#28a745',
                    }}
                >
                    Sign in
                </button>
                <p className="mt-2 mb-3 text-muted">© 2019</p>
            </form>
        );
    }
}

// const SignInForm = compose(
//     withRouter,
//     withFirebase,
//   )(SignInFormBase);

const LogInForm = withRouter(withFirebase(LogInFormBase));

export { LogInForm };
