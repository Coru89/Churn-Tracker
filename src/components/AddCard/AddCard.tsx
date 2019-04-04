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
                    annualFee: this.state.annualFee,
                    firstYearFree: this.state.firstYearFree,
                    rewardName: this.state.rewardName,
                    rewardAmount: this.state.rewardAmount,
                    minimumSpend: this.state.minimumSpend,
                    timeFrame: this.state.timeFrame,
                    estimatedValue: this.state.estimatedValue,
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

        if (e.target.type && e.target.type === 'checkbox') {
            const checkbox: HTMLInputElement | null = document.querySelector('input[type=checkbox]');

            if (checkbox instanceof HTMLInputElement && checkbox.checked == true) {
                e.target.value = "true";
            } else {
                e.target.value = "false";
            }
        }

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

        if (this.props.firebase.auth.currentUser) {
            const uid = this.props.firebase.auth.currentUser.uid;
            this.props.firebase.cards(uid).off();
        }

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
                                        name="opened"
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
                                    <label>AnnualFee</label>
                                    <input
                                        name="annualFee"
                                        onChange={this.onChange}
                                        type="number"
                                        value={this.state.annualFee}
                                        step="any" />
                                    <label>first Year Free?</label>
                                    <input
                                        type="checkbox"
                                        name="firstYearFree"
                                        onChange={this.onChange}
                                    />
                                    <label>Reward Name</label>
                                    <input
                                        name="rewardName"
                                        onChange={this.onChange}
                                        value={this.state.rewardName}
                                        type="text"
                                    />
                                    <label>Reward Amount</label>
                                    <input
                                        name="rewardAmount"
                                        onChange={this.onChange}
                                        value={this.state.rewardAmount}
                                        type="number"
                                    />
                                    <label>Minimum Spend</label>
                                    <input
                                        name="minimumSpend"
                                        onChange={this.onChange}
                                        value={this.state.minimumSpend}
                                        type="number"
                                    />
                                    <label>Time Frame</label>
                                    <input
                                        name="timeFrame"
                                        onChange={this.onChange}
                                        value={this.state.timeFrame}
                                        type="number"
                                    />
                                    <label>Estimated Value</label>
                                    <input
                                        name="estimatedValue"
                                        onChange={this.onChange}
                                        value={this.state.estimatedValue}
                                        type="number"
                                    />
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
