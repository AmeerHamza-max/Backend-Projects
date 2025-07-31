const EventEmitter = require('events');
const emitter = new EventEmitter();

const objectEmitter = {
    user_login: 0,
    user_purchase: 0,
    user_update: 0,
    user_logout: 0,
};

// Login Event
emitter.on('user-login', (username) => {
    objectEmitter.user_login++;
    console.log(` ${username} logged in.`);
    console.log(`Total Logins: ${objectEmitter.user_login}`);
    console.log('-----------------------------');
});

// Purchase Event
emitter.on('user-purchase', (username) => {
    objectEmitter.user_purchase++;
    console.log(`🛒 ${username} made a purchase.`);
    console.log(`Total Purchases: ${objectEmitter.user_purchase}`);
    console.log('-----------------------------');
});

// Update Event
emitter.on('user-update', (username) => {
    objectEmitter.user_update++;
    console.log(`📝 ${username} updated profile.`);
    console.log(`Total Updates: ${objectEmitter.user_update}`);
    console.log('-----------------------------');
});

// Logout Event
emitter.on('user-logout', (username) => {
    objectEmitter.user_logout++;
    console.log(`🚪 ${username} logged out.`);
    console.log(`Total Logouts: ${objectEmitter.user_logout}`);
    console.log('-----------------------------');
});

// 🔔 Emit events
const users = ['Ameer Hamza', 'Ali Raza', 'Sara Khan'];

users.forEach((user) => {
    emitter.emit('user-login', user);
    emitter.emit('user-update', user);
    emitter.emit('user-purchase', user);
    emitter.emit('user-logout', user);
});
