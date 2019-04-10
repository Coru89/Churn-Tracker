import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { ISignUpFormProps, ISignUpFormState } from '.';

class SignUpFormBase extends Component<ISignUpFormProps, ISignUpFormState> {
    constructor(props: ISignUpFormProps) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            password2: '',
            error: {
                message: '',
            },
        };
    }

    onChange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e: any) => {
        this.props.firebase.auth
            .createUserWithEmailAndPassword(
                this.state.email,
                this.state.password,
            )
            .then((authUser: any) => {
                // Create a user in your Firebase realtime database
                return this.props.firebase.user(authUser.user.uid).set({
                    username: this.state.username,
                    email: this.state.email,
                });
            })
            .then(() => {
                this.setState({ ...this.state });
                this.props.history.push(ROUTES.ITEMS);
            })
            .catch((error: any) => {
                this.setState({ error });
            });

        e.preventDefault();
    };

    isFormValid = () => {
        let disabled: boolean;

        if (
            this.state.password !== this.state.password2 ||
            this.state.password === '' ||
            this.state.email === '' ||
            this.state.username === ''
        ) {
            disabled = true;
        } else {
            disabled = false;
        }

        return disabled;
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <input
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button type="submit" disabled={this.isFormValid.bind(this)()}>
                    Sign Up
                </button>

                {!this.state.error.message ? null : (
                    <p>Error: {this.state.error.message}</p>
                )}
            </form>
        );
    }
}

// using the higher-order Firebase Context Componenet to wrap the SignUpForm
// using the withRouter higher order componenet from react-router-dom
// this gives us access to the router props (like history)

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

// using recompose to organize higher-order components ***(not working with TS)***
// const SignUpForm = compose(
//     withRouter,
//     withFirebase,
// )(SignUpFormBase);

export { SignUpForm };
