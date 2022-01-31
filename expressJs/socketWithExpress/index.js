const express= require('express');
const app=express();
const http=require('http');
const expresServer=http.createServer(app);
const {Server}= require("socket.io");
const io=new Server(expresServer);

io.on("connection",function (socket){
    console.log("New user connected");

    socket.on("disconnect",function (){
        console.log("User disconnected")
    })
})
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
expresServer.listen(8000,()=>{
    console.log("Server run success")
})