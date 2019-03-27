import React, { Component } from 'react';

import { withAuthorization } from '../Session';

export class HomePage extends Component<any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return this.props.authUser ? (
            <h1>This should be a protected route</h1>
        ) : null;
    }
}

const condition = (authUser: any) => !!authUser;

export default withAuthorization(condition)(HomePage);
