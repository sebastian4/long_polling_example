var events = require('events');
var eventEmitter = new events.EventEmitter();
 
var ringBell = function ringBell()
{
  console.log('ring ring ring');
}

var creek = function creek()
{
  console.log('creeeeeeeek');
}

eventEmitter.on('doorOpen', ringBell);
eventEmitter.on('creek', creek);

eventEmitter.emit('doorOpen');
eventEmitter.emit('doorOpen');
eventEmitter.emit('creek');