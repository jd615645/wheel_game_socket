$(document).ready(function() {
  var socket = io();
  $('#startBtn').click(function() {
    socket.emit('start');
  })
});
