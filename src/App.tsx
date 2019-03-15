import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
// import firebase from './firebase/firebaseConfig';
// import { BrowserRouter as Router } from 'react-dom';

class App extends Component {
    state = {
        email: '',
        password: '',
    };

    render() {
        return (
            <React.Fragment>
                <LoginForm
                    email={this.state.email}
                    password={this.state.password}
                />
            </React.Fragment>
        );
    }
}

export default App;
