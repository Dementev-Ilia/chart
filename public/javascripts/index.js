(() => {
console.log("socket.io");

let socket = io();
let mesList = document.getElementById('message');
let autorization = document.getElementById('autorization')
let userName = document.getElementById('userName');
let room = document.getElementById('room');
let messageForm = document.getElementById('textField');
let message = document.getElementById('m');

autorization.onsubmit = (e) => {
    e.preventDefault();
    console.log(userName.value);
    console.log(room.value);
    socket.emit("autorization", {user: userName.value, room: room.value});
    userName.value = "";
    room.value = "";
    return false;
}

messageForm.onsubmit = (e) => {
    e.preventDefault();
    console.log(message.value);
    socket.emit("chat message", {msg: message.value});
    message.value = "";
    return false;
}

socket.on('chat message', (data) => {
    mesList.append("<li>" + data.user + "</li>")
})


}
)()