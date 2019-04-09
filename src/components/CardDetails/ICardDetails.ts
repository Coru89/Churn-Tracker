import { RouteComponentProps } from 'react-router-dom';
import Firebase from '../Firebase';

export interface ICardDetailsProps extends RouteComponentProps<any> {
    firebase: Firebase;
    card: ICard;
    authUser: object | null;
    // deleteCard: any;
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
