// Import the built-in events module
const EventEmitter = require('events');

// Create a new instance of EventEmitter
const emitter = new EventEmitter();

// Register an event listener for the 'greet' event
emitter.on('greet', (person) => {
    console.log(`${person.name} is a good ${person.role}`);
});

// Trigger the 'greet' event with custom data
emitter.emit('greet', { name: 'Ameer Hamza', role: 'Web Developer' });
