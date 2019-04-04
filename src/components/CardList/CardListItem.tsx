import React, { Component } from 'react';

import { ICardListItemProps } from '.';
import { addDays, differenceInCalendarDays } from 'date-fns';


export default class CardListItem extends Component<ICardListItemProps> {

    calculateAge(openedDate: any) {
        const today = new Date().toISOString().substr(0, 10);

        const ageNotRounded = differenceInCalendarDays(
            today,
            openedDate,
        ) / 365

        const age = Math.round(ageNotRounded * 10) / 10;
        this.props.card.age = age;
    }

    calculateDaysUntilNextFee(openedDate: any) {

        const nextFeeDate = addDays(openedDate, 365);
        const today = new Date().toISOString().substr(0, 10);

        const daysNextFee = differenceInCalendarDays(
            nextFeeDate,
            today,
        )

        this.props.card.daysUntilNextFee = daysNextFee;
    }


    componentDidMount() {
        this.calculateAge(this.props.card.opened);
        this.calculateDaysUntilNextFee(this.props.card.opened);
    }

    render() {
        return (
            <div data-card-id={this.props.card.uid} key={this.props.card.uid}>
                <label>Name:</label>
                <div>{this.props.card.name}</div>
                <label>Type</label>
                <div>{this.props.card.type}</div>
                <label>Opened:</label>
                <div>{this.props.card.opened}</div>
                <label>Age:</label>
                <div>{this.props.card.age}</div>
                <label>Days Until Next Fee:</label>
                <div>{this.props.card.daysUntilNextFee} days</div>
                <button>Edit</button>
                <button onClick={this.props.deleteCard}>Delete</button>
            </div>
        );
    }
}

export { CardListItem };
