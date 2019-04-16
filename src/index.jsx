import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { Firebase, FirebaseContext } from './components/Firebase';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root'),
);

serviceWorker.register();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('../firebase-messaging-sw.js')
        .then(function(registration) {
            console.log(
                'Registration successful, scope is:',
                registration.scope,
            );
        })
        .catch(function(err) {
            console.log('Service worker registration failed, error:', err);
        });
}
