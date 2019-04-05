import React, { Component } from 'react';

import CardPreviewList from '../CardPreview/CardPreviewList';

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
                                <CardPreviewList
                                    toggleNav={this.props.toggleNav}
                                />
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
