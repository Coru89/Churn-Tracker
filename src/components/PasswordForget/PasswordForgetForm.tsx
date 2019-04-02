import React, { Component } from 'react';

import { IPasswordForgetFormProps, IPasswordForgetFormState } from '.';
import { withFirebase } from '../Firebase';

class PasswordForgetFormBase extends Component<
    IPasswordForgetFormProps,
    IPasswordForgetFormState
> {
    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            error: {
                message: '',
            },
        };
    }

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

    onChange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { error } = this.state;

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
