import React from 'react';
import { withFirebase } from '../Firebase';

const LogOutButton = ({ firebase }: any) => (
    <button type="button" onClick={firebase.signOut}>
        Sign Out
    </button>
);

// export default LogOutButton;

export default withFirebase(LogOutButton);
