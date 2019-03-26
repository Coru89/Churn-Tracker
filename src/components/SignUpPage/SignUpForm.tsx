import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { ISignUpFormProps } from '.';

class SignUpFormBase extends Component<ISignUpFormProps> {
    // DO I NEED THIS?
    // constructor(props: ISignUpFormProps) {
    //     super(props);
    // }

    // init state
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
        error: {
            code: '',
            message: '',
        },
    };

    onChange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e: any) => {
        console.log(this.state.email);
        console.log(this.state.password);

        this.props.firebase.auth
            .createUserWithEmailAndPassword(
                this.state.email,
                this.state.password,
            )
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
                    value={this.props.username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    name="email"
                    value={this.props.email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="password"
                    value={this.props.password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <input
                    name="password2"
                    value={this.props.password2}
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
