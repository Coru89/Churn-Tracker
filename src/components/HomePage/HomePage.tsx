import React, { Component } from 'react';

import CardList from '../CardList/CardList';

import { withAuthorization } from '../Session';

export class HomePage extends Component<any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return this.props.authUser ? <CardList /> : null;
    }
}

const condition = (authUser: any) => !!authUser;

export default withAuthorization(condition)(HomePage);
