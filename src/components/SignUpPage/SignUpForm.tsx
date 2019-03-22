import React, { Component } from 'react';
import { FirebaseContext, Firebase } from '../Firebase';

import { ISignUpFormProps } from '.';

class SignUpForm extends Component<ISignUpFormProps> {
    constructor(props: ISignUpFormProps) {
        super(props);
    }

    // init state
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
        error: null,
    };

    onChange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e: any) => {
        this.props.firebase.auth
            .createUserWithEmailAndPassword(
                this.state.email,
                this.state.password,
            )
            .then(() => {
                this.setState({ ...this.state });
            })
            .catch((error: any) => {
                alert(error);
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

                {this.props.error && <p>{this.props.error.message}</p>}
            </form>
        );
    }
}

export { SignUpForm };
