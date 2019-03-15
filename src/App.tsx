import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
// import firebase from './firebase/firebaseConfig';

class App extends Component {
    state = {
        email: '',
        password: '',
    };

    render() {
        return (
            <div className="App">
                <LoginForm
                    email={this.state.email}
                    password={this.state.password}
                />
            </div>
        );
    }
}

export default App;
