import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import LandingPage from '../LandingPage/LandingPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LogInPage';
import PasswordForgetPage from '../PasswordForgetPage/PasswordForgetPage';
import HomePage from '../HomePage/HomePage';
import AccountPage from '../AccountPage/AccountPage';
import AdminPage from '../AdminPage/AdminPage';

import * as ROUTES from '../../constants/routes';
import { withAuth } from '../Session';

const App = () => {
    return (
        <Router>
            <React.Fragment>
                <Navigation />
                <hr />
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
            </React.Fragment>
        </Router>
    );
};

export default withAuth(App);
