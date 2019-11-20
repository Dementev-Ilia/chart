console.log("socket.io");

var socket = io();
var form = document.getElementById('textField');
var input = document.getElementById('m');



form.onsubmit = function(e) {
    e.preventDefault();
    console.log(input.value);
    socket.emit("chat message", input.value);
    input.value = "";
    return false;
}
