import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// images
import mastercard from '../../styles/images/icons/mastercard.svg';
import visa from '../../styles/images/icons/visa.svg';
import amex from '../../styles/images/icons/amex.svg';
import generic from '../../styles/images/icons/default.svg';

import { ICardPreviewItemProps, ICardPreviewItemState } from '.';
import { addDays, differenceInCalendarDays } from 'date-fns';
import * as ROUTES from '../../constants/routes';

class CardPreviewItem extends Component<
    ICardPreviewItemProps,
    ICardPreviewItemState
> {
    constructor(props: ICardPreviewItemProps) {
        super(props);

        this.state = {
            cardType: this.props.card.cardType,
        };
    }

    onClick = (e: any) => {
        this.props.history.push(ROUTES.ITEM);

        console.log;
    };

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

    componentDidMount() {
        this.calculateAge(this.props.card.opened);
        this.calculateDaysUntilNextFee(this.props.card.opened);
    }

    render() {
        const Mastercard = () => {
            return (
                <img
                    className="ct__preview-item-logo"
                    src={mastercard}
                    alt="mastercard"
                />
            );
        };
        const Visa = () => {
            return (
                <img className="ct__preview-item-logo" src={visa} alt="visa" />
            );
        };
        const Amex = () => {
            return (
                <img className="ct__preview-item-logo" src={amex} alt="amex" />
            );
        };

        const cardType = {
            Mastercard: <Mastercard />,
            Visa: <Visa />,
            Amex: <Amex />,
        } as any;

        const ct = this.state.cardType;

        console.log(cardType[ct]);

        return (
            <div
                onClick={this.onClick}
                className="ct__preview-item"
                data-card-id={this.props.card.uid}
                key={this.props.card.uid}
            >
                {ct ? (
                    cardType[ct]
                ) : (
                    <img
                        className="ct__preview-item-logo"
                        src={generic}
                        alt="defult credit cardlogo"
                    />
                )}

                {/* <label>Name:</label> */}
                <div className="ct__preview-item-name">
                    {this.props.card.name}
                </div>
                <div className="ct__preview-item-bank">
                    {this.props.card.bank}
                </div>

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

export default withRouter(CardPreviewItem);
