// import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
// import { withAuthentication } from '../../src/components/Session';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.sendNotifications = functions.database
    .ref('/users/{uid}/notifications/{id}')
    .onWrite((event: any, context: any) => {
        // Setup notification
        // const NOTIFICATION_SNAPSHOT = event.data;
        const payload = {
            notification: {
                title: 'Hello',
                body: 'HELLO WORLD',
            },
        };

        return admin
            .database()
            .ref('/tokens')
            .once('value')
            .then((data: any) => {
                if (!data.val()) return;

                const snapshot = data.val();
                const tokens = [];

                for (const key in snapshot) {
                    tokens.push(snapshot[key].token);
                }

                return admin.messaging().sendToDevice(tokens, payload);
            });
    });
