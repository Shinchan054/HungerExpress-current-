// const socket = io();
//
// const container = document.getElementById('message-container');
// const message = document.getElementById('send-container');
// const msgin = document.getElementById('message-input');
//
// const name = document.getElementById('saved-data');
// socket.on('chat-message',data =>{
//     var str = name.dataset.name;
//     str = str + ": "+data;
//     appendmessage(str);
// });
//
//
//
// message.addEventListener('submit',e=>{
//     e.preventDefault();
//     const msg = msgin.value;
//     socket.emit('send-message',msg);
//     msgin.value = '';
// }
// );
//
// function appendmessage(msg)
// {
//     const newMsg = document.createElement('div');
//     newMsg.innerText = msg;
//    container.append(newMsg);
//
// }