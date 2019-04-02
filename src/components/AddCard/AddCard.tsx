import React, { Component } from 'react';

import * as ROUTES from '../../constants/routes';

import { IAddCardProps, IAddCardState } from './IAddCard';
import { withAuthorization, AuthUserContext } from '../Session';
import { withRouter } from 'react-router-dom';

class AddCardBase extends Component<IAddCardProps, any, IAddCardState> {
    constructor(props: IAddCardProps) {
        super(props);

        this.state = {
            name: '',
            type: '',
            error: '',
        };
    }

    addNewCard() {
        const uid = this.props.firebase.auth.currentUser.uid;

        this.props.firebase
            .cards(uid)
            .push({
                name: this.state.name,
                type: this.state.type,
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
                                    <input
                                        name="type"
                                        onChange={this.onChange}
                                        value={this.state.type}
                                        type="text"
                                    />
                                    <label>Opened</label>
                                    <input type="date" />
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
