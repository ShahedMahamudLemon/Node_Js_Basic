const express= require('express');
const app=express();
const http=require('http');
const expresServer=http.createServer(app);
const {Server}= require("socket.io");
const io=new Server(expresServer);
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
server.listen(8000,()=>{
    console.log("Server run success")
})