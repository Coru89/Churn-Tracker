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


        const match = this.props.match;

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
                        (match) ? (
                            <Link to={{
                                pathname: `${match.url}/${card.uid}`,
                                state: {
                                    card,
                                    cards: this.state.cards
                                }
                            }}>
                                <CardPreviewItem
                                    key={card.uid}
                                    card={card}
                                />
                            </Link>
                        ) : null


                    ))}
                </ul>
            </div>
        );
    }
}

export default withAuthentication(withFirebase(CardPreviewList));
