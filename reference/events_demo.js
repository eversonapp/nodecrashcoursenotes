const EventEmitter = require('events')

//Create Class
class MyEmitter extends EventEmitter{ }

//Init Object
const myEmmiter = new MyEmitter() 

//Event Listener
myEmmiter.on('event', () => console.log('Event Fired!'))

//Init Event
myEmmiter.emit('event')