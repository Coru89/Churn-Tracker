importScripts('https://www.gstatic.com/firebasejs/3.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.4.0/firebase-messaging.js');

const devConfig = {
    messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
};

const prodConfig = {
    messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
    const title = payload.notification.title;
    console.log('payload', payload.notification.icon);
    const options = {
        body: payload.notification.body,
        icon: payload.notification.icon,
    };
    return self.registration.showNotification(title, options);
});
