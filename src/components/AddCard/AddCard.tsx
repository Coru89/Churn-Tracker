import React, { Component } from 'react';

import * as ROUTES from '../../constants/routes';

import { IAddCardProps, IAddCardState } from './IAddCard';
import { withAuthorization, AuthUserContext } from '../Session';
import { withRouter } from 'react-router-dom';

class AddCardBase extends Component<IAddCardProps, IAddCardState> {
    constructor(props: IAddCardProps) {
        super(props);

        this.state = {
            error: '',
            name: '',
            type: '',
            cardType: '',
            opened: '',
            creditLimit: 0,
            annualFee: 0,
            firstYearFree: false,
            rewardName: '',
            rewardAmount: 0,
            minimumSpend: 0,
            timeFrame: 0,
            estimatedValue: 0,
        };
    }

    addNewCard() {
        if (this.props.firebase.auth.currentUser) {
            const uid = this.props.firebase.auth.currentUser.uid;

            this.props.firebase
                .cards(uid)
                .push({
                    name: this.state.name,
                    type: this.state.type,
                    cardType: this.state.cardType,
                    opened: this.state.opened,
                    creditLimit: this.state.creditLimit,
                })
                .then(() => {
                    this.setState({ ...this.state });
                    this.props.history.push(ROUTES.HOME);
                })
                .catch((error: any) => {
                    console.log(error);
                    this.setState({ error });
                });
        }
    }

    onChange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e: any) => {
        e.preventDefault();

        this.addNewCard();
    };

    componentDidMount() {
        this.props.toggleNav();
    }

    componentWillUnmount() {
        this.props.toggleNav();
    }
    render() {
        return (
            <div>
                {
                    <AuthUserContext.Consumer>
                        {authUser =>
                            authUser ? (
                                <form onSubmit={this.onSubmit}>
                                    <label>Name</label>
                                    <input
                                        name="name"
                                        onChange={this.onChange}
                                        value={this.state.name}
                                        type="text"
                                    />
                                    <label>Type</label>
                                    <select name="type" defaultValue="" onChange={this.onChange}>
                                        <option value="" disabled>select</option>
                                        <option value="personal">Personal</option>
                                        <option value="business">Business</option>
                                    </select>
                                    <label>Card Type</label>
                                    <select name="cardType" defaultValue="" onChange={this.onChange}>
                                        <option value="" disabled>select</option>
                                        <option value="Mastercard">Mastercard</option>
                                        <option value="Visa">Visa</option>
                                        <option value="Amex">Amex</option>
                                    </select>
                                    <label>Opened</label>
                                    <input
                                        name="opended"
                                        onChange={this.onChange}
                                        type="date"
                                        value={this.state.opened} />
                                    <label>Credit Limit</label>
                                    <input
                                        name="creditLimit"
                                        onChange={this.onChange}
                                        type="number"
                                        value={this.state.creditLimit}
                                        step="any" />
                                    <button type="submit">Add</button>
                                </form>
                            ) : null
                        }
                    </AuthUserContext.Consumer>
                }
            </div>
        );
    }
}

const condition = (authUser: any) => !!authUser;

const AddCard = withAuthorization(condition)(AddCardBase);

export default withRouter(AddCard);
