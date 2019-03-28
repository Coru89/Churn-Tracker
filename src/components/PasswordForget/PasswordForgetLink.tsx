import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const PasswordForgetLink = () => (
    <span>
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot your password?</Link>
    </span>
);

export { PasswordForgetLink };
