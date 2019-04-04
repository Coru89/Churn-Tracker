import React, { Component } from 'react';

import { ICardListState, CardListItem, ICardListProps } from '.';
import * as ROUTES from '../../constants/routes';

import { withFirebase } from '../Firebase';
import { Link } from 'react-router-dom';

class CardList extends Component<ICardListProps, ICardListState> {
    constructor(props: any) {
        super(props);

        this.state = {
            loading: false,
            cards: [],
        };
    }

    deleteCard = (e: any) => {
        if (this.props.firebase.auth.currentUser) {
            const uid = this.props.firebase.auth.currentUser.uid;

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
        if (this.props.firebase.auth.currentUser) {
            const uid = this.props.firebase.auth.currentUser.uid;

            this.props.firebase.cards(uid).on('value', (snapshot: any) => {
                const cardsObject = snapshot.val();

                if (cardsObject) {
                    const cardList = Object.keys(cardsObject).map(key => ({
                        ...cardsObject[key],
                        uid: key,
                    }));

                    this.setState({
                        cards: cardList,
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
        if (this.props.firebase.auth.currentUser) {
            const uid = this.props.firebase.auth.currentUser.uid;
            this.props.firebase.cards(uid).off();
        }


    }

    render() {
        const { cards, loading } = this.state;

        return (
            <div>
                <h1>Cards</h1>
                <Link to={ROUTES.ADD_CARD}>Add a new card</Link>
                <br />
                {loading && <div>Loading ...</div>}
                <ul>
                    {cards.map((card: any) => (
                        <CardListItem
                            key={card.uid}
                            deleteCard={this.deleteCard}
                            // calculateAge={this.calculateAge}
                            card={card}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default withFirebase(CardList);
