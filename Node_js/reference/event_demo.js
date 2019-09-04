const EventEmitter = require('events');

// Create Class
class MyEmitter extends EventEmitter{}

// Init Object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event1', () => console.log('Event Fired......'));
myEmitter.on('event2', data => console.log('Event Fired......' + JSON.stringify(data)));

// Init Event
myEmitter.emit('event1');
myEmitter.emit('event2',{id:'123'});