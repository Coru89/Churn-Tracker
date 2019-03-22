import React, { Component } from 'react';
// import firebase from './firebase/firebaseConfig';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';

import Navigation from './components/Navigation/Navigation';
import LandingPage from './components/LandingPage/LandingPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import LogInPage from './components/LogInPage/LogInPage';
import PasswordForgetPage from './components/PasswordForgetPage/PasswordForgetPage';
import HomePage from './components/HomePage/HomePage';
import AccountPage from './components/AccountPage/AccountPage';
import AdminPage from './components/AdminPage/AdminPage';

const App = () => (
    <Router>
        <div>
            <Navigation />
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.LOG_IN} component={LogInPage} />
            <Route
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage}
            />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
    </Router>
);

export default App;
