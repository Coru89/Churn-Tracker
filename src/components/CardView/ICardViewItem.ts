import { RouteComponentProps } from 'react-router-dom';
import Firebase from '../Firebase';

export interface ICardViewItemProps extends RouteComponentProps<any> {
    firebase: Firebase;
    card: ICard;
    deleteCard: any;
}

export interface ICardViewItemState {
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
