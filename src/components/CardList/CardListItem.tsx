import React, { Component } from 'react';

import { ICardListItemProps } from '.';

export default class CardListItem extends Component<ICardListItemProps> {
    render() {
        return (
            <li data-card-id={this.props.card.uid} key={this.props.card.uid}>
                <label>Name</label>
                <input disabled value={this.props.card.name} type="text" />
                <label>Type</label>
                <input value={this.props.card.type} type="text" />
                <label>Opened</label>
                <input type="date" />
                <button>Edit</button>
                <button onClick={this.props.deleteCard}>Delete</button>
            </li>
        );
    }
}

export { CardListItem };
