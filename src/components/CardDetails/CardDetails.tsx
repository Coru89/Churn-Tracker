import React, { Component } from 'react';

import { addDays, differenceInCalendarDays } from 'date-fns';
import { withAuthentication } from '../Session';
import * as ROUTES from '../../constants/routes';

import { ICardDetailsProps, ICardDetailsState } from '.';

class CardDetails extends Component<ICardDetailsProps, ICardDetailsState> {
    deleteCard = () => {
        if (this.props.authUser) {
            const uid = this.props.authUser.uid;

            const cardID = this.props.location.state.card.uid;
            const cardsList = this.props.location.state.cards;

            this.props.firebase.removeCard(uid, cardID).remove();

            for (let i = 0; i < cardsList.length; i++) {
                if (cardsList[i].uid === cardID) {
                    cardsList.splice(i, 1);
                }
            }

            this.props.history.push(ROUTES.ITEMS);
        }
    };

    calculateAge(openedDate: any) {
        const today = new Date().toISOString().substr(0, 10);

        const ageNotRounded = differenceInCalendarDays(today, openedDate) / 365;

        const age = Math.round(ageNotRounded * 10) / 10;

        if (this.props.card) {
            this.props.card.age = age;
        }
    }

    calculateDaysUntilNextFee(openedDate: any) {
        const nextFeeDate = addDays(openedDate, 365);
        const today = new Date().toISOString().substr(0, 10);

        const daysNextFee = differenceInCalendarDays(nextFeeDate, today);

        if (this.props.card) {
            this.props.card.daysUntilNextFee = daysNextFee;
        }
    }

    componentDidMount() {
        if (this.props.card) {
            this.calculateAge(this.props.card.opened);
            this.calculateDaysUntilNextFee(this.props.card.opened);
        }
    }

    testNotification(e: any) {
        this.props.firebase.sendNotification('Notification here');
        e.preventDefault();
    }

    render() {
        return (
            // using props.location.state because props passed via router <Link/>
            this.props.location.state.card ? (
                <div
                    data-card-id={this.props.location.state.card.uid}
                    key={this.props.location.state.card.uid}
                >
                    <label>Name:</label>
                    <div>{this.props.location.state.card.name}</div>
                    <label>Type</label>
                    <div>{this.props.location.state.card.type}</div>
                    <label>Opened:</label>
                    <div>{this.props.location.state.card.opened}</div>
                    <label>Age:</label>
                    <div>{this.props.location.state.card.age}</div>
                    <label>Days Until Next Fee:</label>
                    <div>
                        {this.props.location.state.card.daysUntilNextFee} days
                    </div>
                    <button>Edit</button>
                    <button onClick={this.deleteCard}>Delete</button>
                    <button onClick={() => this.testNotification(event)}>
                        test notification
                    </button>
                </div>
            ) : null
        );
    }
}

export default withAuthentication(CardDetails);
