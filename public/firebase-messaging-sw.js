importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js');

console.info('hi');

// const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

firebase.initializeApp({
    'messagingSenderId': '412843179033'
});

const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(payload => {
//     const title = payload.notification.title;
//     console.log('payload', payload.notification.icon);
//     const options = {
//         body: payload.notification.body,
//         icon: payload.notification.icon,
//     };
//     return self.registration.showNotification(title, options);
// });

messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("my notification title");
        });
    return promiseChain;
});
