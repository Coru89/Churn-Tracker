import React, { Component } from 'react';

import { IPasswordForgetForm } from '.';
import { withFirebase } from '../Firebase';
import { getMaxListeners } from 'cluster';

class PasswordForgetFormBase extends Component<IPasswordForgetForm> {
    constructor(props: any) {
        super(props);

        // this.state = {
        //     email: '',
        //     error: {},
        // };
    }

    state = {
        email: '',
        error: {
            message: '',
        },
    };

    // firebase: any;

    onSubmit = (e: any) => {
        alert(this.state.email);
        this.props.firebase
            .passwordReset(this.state.email)
            .then(() => {
                this.setState({ ...this.state });
            })
            .catch((error: any) => {
                this.setState({ error });
            });

        e.preventDefault();
    };

    // onSubmit = (e: any) => {
    //     this.props.firebase.auth
    //         .signInWithEmailAndPassword(this.state.email, this.state.password)
    //         .then(() => {
    //             this.setState({ ...this.state });
    //             this.props.history.push(ROUTES.HOME);
    //         })
    //         .catch((error: any) => {
    //             console.log(error);
    //             this.setState({ error });
    //         });

    //     e.preventDefault();
    // };

    onChange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { email, error } = this.state;

        // const isInvalid = email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <button type="submit">Reset My Password</button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm };
