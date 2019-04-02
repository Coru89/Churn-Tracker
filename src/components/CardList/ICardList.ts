export interface ICardListProps {
    firebase: any;
}

export interface ICardListState {
    cards: Array<ICardListCard>;
    loading: boolean;
}

export interface ICardListCard {
    uid: string;
}

export interface ICardListItemProps {
    card: ICard;
    deleteCard: any;
}

export interface ICard {
    date: Date;
    name: string;
    uid: string;
    type: string;
}
