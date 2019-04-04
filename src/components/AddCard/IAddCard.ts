import { RouteComponentProps } from 'react-router-dom';
import Firebase from '../Firebase';

export interface IAddCardProps extends RouteComponentProps<any> {
    toggleNav: any;
    firebase: Firebase;
}

export interface IAddCardState {
    error: string;
    name: string;
    type: string;
    cardType: string;
    opened: string | number | string[] | undefined;
    creditLimit: number;
    annualFee: number;
    firstYearFree: boolean;
    rewardName: string;
    rewardAmount: number;
    minimumSpend: number;
    timeFrame: number;
    estimatedValue: number;
    [x: number]: any;
}
