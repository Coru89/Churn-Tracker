import { RouteComponentProps } from 'react-router-dom';
import Firebase from '../Firebase';

export interface ICardDetailsProps extends RouteComponentProps<any> {
    firebase: Firebase;
    card: ICard | null;
    cards: ICard;
    authUser: IAuthUser | null;
    // deleteCard: any;
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

export interface IAuthUser {
    uid: string;
}

export interface ICardDetailsState {
    loading: boolean;
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
