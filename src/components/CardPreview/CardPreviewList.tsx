import React, { Component } from 'react';

import { ICardPreviewState, ICardPreviewProps } from '.';
import CardPreviewItem from './CardPreviewItem';
import * as ROUTES from '../../constants/routes';

import { withAuthentication } from '../Session';
import { withFirebase } from '../Firebase';
import { Link } from 'react-router-dom';

class CardPreviewList extends Component<ICardPreviewProps, ICardPreviewState> {
    constructor(props: any) {
        super(props);

        this.state = {
            loading: false,
            cards: [],
        };
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

    getCards() {
        if (this.props.authUser) {
            const uid = this.props.authUser.uid;

            this.props.firebase.cards(uid).on('value', (snapshot: any) => {
                const cardsObject = snapshot.val();

                if (cardsObject) {
                    const CardPreview = Object.keys(cardsObject).map(key => ({
                        ...cardsObject[key],
                        uid: key,
                    }));

                    this.setState({
                        cards: CardPreview,
                    });
                }

                this.setState({
                    loading: false,
                });
            });
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.getCards();
    }

    componentWillUnmount() {
        if (this.props.authUser) {
            const uid = this.props.authUser.uid;
            this.props.firebase.cards(uid).off();
        }
    }

    render() {
        const { cards, loading } = this.state;

        return (
            <div className="ct__preview-item-page">
                <Link
                    className="ct__preview-item-page-add"
                    to={ROUTES.ADD_CARD}
                >
                    Add a new card
                </Link>
                <h1 className="ct__preview-item-page-title">Wallet</h1>
                {loading && <div>Loading ...</div>}
                <ul className="ct__preview-item-list">
                    {cards.map((card: any) => (
                        <CardPreviewItem
                            key={card.uid}
                            deleteCard={this.deleteCard}
                            card={card}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default withAuthentication(withFirebase(CardPreviewList));
