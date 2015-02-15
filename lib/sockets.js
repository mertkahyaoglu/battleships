'use strict';
var socketio = require('socket.io');

module.exports.listen = function(app){
  var io = socketio.listen(app);

  io.on('connection', function(socket){
    
    console.log('Socket.io Connection');

    socket.on('disconnect', function() {
      console.log('Disconnected');
    });

  });

  return io;
};
