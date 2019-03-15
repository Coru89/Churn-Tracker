import React, { Component } from 'react';
// import Firebase from '../firebase/firebaseConfig';

interface Iprops {
    email: string;
    password: string;
}

class LoginForm extends Component<Iprops> {
    login = (email: string, password: string) => {};

    render() {
        return (
            <div>
                <form className="ct-form">
                    <label>Email</label>
                    <input type="email" />
                    <label>Password</label>
                    <input type="password" />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default LoginForm;
