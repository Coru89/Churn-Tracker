import React, { Component } from 'react';

import CardList from '../CardList/CardList';

import { withAuthorization, AuthUserContext } from '../Session';

export class HomePage extends Component<any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    <AuthUserContext.Consumer>
                        {authUser =>
                            authUser ? (
                                <CardList toggleNav={this.props.toggleNav} />
                            ) : null
                        }
                    </AuthUserContext.Consumer>
                }
            </div>
        );
    }
}

const condition = (authUser: any) => !!authUser;

export default withAuthorization(condition)(HomePage);
