import Firebase from '../Firebase';

export interface ICardListProps {
    firebase: Firebase;
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
    uid: string;
    name: string;
    type: string;
    cardType: string;
    opened?: any;
    age: number;
    creditLimit: number;
    annualFee: number;
    firstYearFree: boolean;
    rewardName: string;
    rewardAmount: number;
    minimumSpend: number;
    timeFrame: number;
    estimatedValue: number;
    daysUntilNextFee: number;
}
