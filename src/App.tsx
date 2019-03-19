import React, { Component } from 'react';
// import firebase from './firebase/firebaseConfig';
import { BrowserRouter as Router } from 'react-router-dom';
import * as ROUTES from './constants/routes';

import Navigation from './components/Navigation/Navigation';
import LogInPage from './components/LogInPage/LogInPage';

const App = () => (
    <Router>
      <div>
        <Navigation />
        {/* <Route exact path={ROUTES.LANDING} component={LandingPage} /> */}
        {/* <Route path={ROUTES.SIGN_UP} component={SignUpPage} /> */}
        <Route path={ROUTES.LOG_IN} component={LogInPage} />
        {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} /> */}
        {/* <Route path={ROUTES.HOME} component={HomePage} /> */}
        {/* <Route path={ROUTES.ACCOUNT} component={AccountPage} /> */}
        {/* <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
      </div>
    </Router>
  );

export default App;
