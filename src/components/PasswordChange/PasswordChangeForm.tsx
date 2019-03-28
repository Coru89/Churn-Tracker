import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

class PasswordChangeForm extends Component<any> {
    constructor(props: any) {
        super(props);
    }

    state = {
        password: '',
        password2: '',
        error: {
            message: '',
        },
    };

    onSubmit = (e: any) => {
        // const { password } = this.state;

        this.props.firebase
            .passwordUpdate(this.state.password)
            .then(() => {
                this.setState({ ...this.state });
            })
            .catch((error: object) => {
                alert(error);
                this.setState({ error });
                console.log(error);
            });

        e.preventDefault();
    };

    onChange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { password, password2, error } = this.state;

        const isInvalid = password !== password2 || password === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="New Password"
                />
                <input
                    name="password2"
                    value={password2}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm New Password"
                />
                <button disabled={isInvalid} type="submit">
                    Reset My Password
                </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default withFirebase(PasswordChangeForm);
