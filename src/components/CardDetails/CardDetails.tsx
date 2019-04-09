import React, { Component } from 'react';

import { ICardDetailsProps, ICardDetailsState } from '.';
import { addDays, differenceInCalendarDays } from 'date-fns';
import { withAuthentication } from '../Session';

class CardDetails extends Component<ICardDetailsProps, ICardDetailsState> {
    calculateAge(openedDate: any) {
        const today = new Date().toISOString().substr(0, 10);

        const ageNotRounded = differenceInCalendarDays(today, openedDate) / 365;

        const age = Math.round(ageNotRounded * 10) / 10;
        this.props.card.age = age;
    }

    calculateDaysUntilNextFee(openedDate: any) {
        const nextFeeDate = addDays(openedDate, 365);
        const today = new Date().toISOString().substr(0, 10);

        const daysNextFee = differenceInCalendarDays(nextFeeDate, today);

        this.props.card.daysUntilNextFee = daysNextFee;
    }

    deleteCard = (e: any) => {
        if (this.props.authUser) {
            const uid = this.props.authUser.uid;

            const cardID = e.target.parentElement.getAttribute('data-card-id');
            const cardsList = this.state.cards;

            this.props.firebase.removeCard(uid, cardID).remove();

            for (let i = 0; i < cardsList.length; i++) {
                if (cardsList[i].uid === cardID) {
                    cardsList.splice(i, 1);
                }
            }

            this.setState({
                cards: cardsList,
            });
        }
    };

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

export default withAuthentication(CardDetails);
