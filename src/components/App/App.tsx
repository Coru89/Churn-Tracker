// import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
// import LandingPage from '../LandingPage/LandingPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LogInPage';
import PasswordForgetPage from '../PasswordForget/PasswordForgetPage';
import HomePage from '../HomePage/HomePage';
import AccountPage from '../AccountPage/AccountPage';
import AdminPage from '../AdminPage/AdminPage';
import AddCard from '../AddCard/AddCard';
import CardDetails from '../CardDetails/CardDetails';
import { IAppState } from '.';

import * as ROUTES from '../../constants/routes';
import { withAuthentication, AuthUserContext } from '../Session';

import React, { Component } from 'react';

class App extends Component<{}, IAppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            hideNav: false,
        };
    }

    toggleNav = () => {
        this.setState(prevState => ({ hideNav: !prevState.hideNav }));
    };

    render() {
        return (
            <Router>
                <React.Fragment>
                    <Navigation hideNav={this.state.hideNav} />
                    {/* <Route path={ROUTES.LANDING} component={LandingPage} /> */}
                    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                    <Route
                        exact
                        path={ROUTES.LOG_IN}
                        render={routeProps => (
                            <LogInPage
                                {...routeProps}
                                {...this.props}
                                toggleNav={this.toggleNav}
                            />
                        )}
                    />
                    <Route
                        exact
                        path={ROUTES.ITEMS}
                        render={routeProps => (
                            <HomePage {...routeProps} {...this.props} />
                        )}
                    />
                    <Route
                        path={ROUTES.ITEM}
                        render={routeProps => (
                            <CardDetails {...routeProps} {...this.props} />
                        )}
                    />
                    <Route
                        path={ROUTES.PASSWORD_FORGET}
                        component={PasswordForgetPage}
                    />
                    <Route
                        path={ROUTES.ADD_CARD}
                        render={routeProps => (
                            <AddCard
                                {...routeProps}
                                {...this.props}
                                toggleNav={this.toggleNav}
                            />
                        )}
                    />

                    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                    <Route path={ROUTES.ADMIN} component={AdminPage} />
                </React.Fragment>
            </Router>
        );
    }
}

export default withAuthentication(App);
