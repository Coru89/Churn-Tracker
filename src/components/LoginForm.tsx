import React, { Component } from 'react';
// import Firebase from '../firebase/firebaseConfig';

interface Iprops {
    email: string;
    password: string;
}

class LoginForm extends Component<Iprops> {
    login = (email: string, password: string) => { };

    render() {
        return (
            <div className='form-signin-wrapper' style={{ width: '100%', height: '100vh', display: 'flex', backgroundColor: 'rgba(216, 195, 2, 0.15)' }}>
                <form className="form-signin" style={{ maxWidth: '330px', margin: 'auto', width: '100%', padding: '10px', textAlign: 'center' }}>
                    <h1 className="h1 mb-4 font-weight-bold">Churn.</h1>
                    <h5 className="h5 mb-3 font-weight-normal">Please sign in</h5>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control mb-2" placeholder="Email address" />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control mb-3" placeholder="Password" />
                    <div className="checkbox mb-3">
                        <input type="checkbox" value="remember-me" className="mr-1" />
                        <label>Remember me</label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}>Sign in</button>
                    <p className="mt-2 mb-3 text-muted">© 2019</p>
                </form>
            </div>
        );
    }
}

export default LoginForm;
