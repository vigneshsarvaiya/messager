const io=require('socket.io')(8000)

const users={};

io.on('connerction',socket=>{
    socket.on('new-joined,name=>{
        users[socket.id]=name;
        socket.broadcast.emit(second-user-joined',name);
});

socket.on('send',message=>{
    socket.broadcast.emit('reveive',{message:message,name :user[socket.id]})
});
    
})