import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import LogOutButton from '../LogOutButton/LogOutButton';
import { INavigationProps } from '.';

// how do i use the I NavigationProps so I don't have to set authUser as any?
const Navigation = ({ authUser }: any) => (
    <div>{!authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LOG_IN}>Log In</Link>
        </li>
        <li>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
            <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
        <LogOutButton />
        <li />
    </ul>
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LOG_IN}>Log In</Link>
        </li>
    </ul>
);

export default Navigation;
