import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';

class CardListBase extends Component<any> {
    getCardListForUser(authUser: any) {
        const cardList = this.props.firebase
            .user(authUser.user.uid)
            .on('value', (snapshot: any) => {
                console.log(snapshot.value);
            });
    }

    componentDidMount() {}

    render() {
        return <div />;
    }
}

const CardList = withRouter(withFirebase(CardListBase));

export default CardList;
