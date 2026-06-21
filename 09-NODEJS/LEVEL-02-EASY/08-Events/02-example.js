const EventEmitter = require('events');
const systemTracker = new EventEmitter();

// 1. Register listener for event "userLogin"
systemTracker.on('userLogin', (username) => {
  console.log(`System Audit: ${username} logged in at ${new Date().toLocaleTimeString()}`);
});

// 2. Emit the event simulating user login action
systemTracker.emit('userLogin', 'JaneDoe');
systemTracker.emit('userLogin', 'JohnSmith');