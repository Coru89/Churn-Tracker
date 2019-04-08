import { RouteComponentProps } from 'react-router-dom';

export interface ILoginPageProps extends RouteComponentProps<any> {
    toggleNav: any;
    authUser: object | null;
}
