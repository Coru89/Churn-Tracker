import Firebase from '../Firebase';
import { RouteComponentProps } from 'react-router-dom';

export interface ICardPreviewProps {
    firebase: Firebase;
    authUser: authUser | null;
}

export interface authUser {
    uid: string;
}

export interface ICardPreviewState {
    cards: Array<ICardPreviewCard>;
    loading: boolean;
}

export interface ICardPreviewCard {
    uid: string;
}

export interface ICardPreviewItemProps extends RouteComponentProps<any> {
    card: ICard;
    deleteCard: any;
}

export interface ICardPreviewItemState {
    cardType: string;
}

export interface ICard {
    uid: string;
    name: string;
    bank: string;
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
