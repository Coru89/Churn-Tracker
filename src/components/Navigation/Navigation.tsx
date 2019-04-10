import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import LogOutButton from '../LogOutButton/LogOutButton';
import { AuthUserContext } from '../Session';

import { INavigationProps } from '.';

import React, { Component } from 'react';

class Navigation extends Component<INavigationProps> {
    constructor(props: INavigationProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <AuthUserContext.Consumer>
                    {authUser =>
                        authUser && this.props.hideNav === false ? (
                            <NavigationAuth />
                        ) : null
                    }
                </AuthUserContext.Consumer>
            </div>
        );
    }
}

const NavigationAuth = () => (
    <nav>
        <ul>
            <li>
                <Link to={ROUTES.ITEMS}>Home</Link>
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
    </nav>
);

export default Navigation;
