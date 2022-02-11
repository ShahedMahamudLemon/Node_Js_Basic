const express= require('express');
const app=express();
const http=require('http');
const expresServer=http.createServer(app);
const {Server}= require("socket.io");
const io=new Server(expresServer);

// io.on("connection",function (socket){
//     console.log("New user connected");
//
//     // setTimeout(function (){
//     //     socket.send("Socket worked!!");
//     // },5000)
//     // setInterval(function (){
//     //     let date =new Date();
//     //     let time = date.getTime();
//     //     // socket.send(time);
//     //     socket.emit("customEvent",time);
//     // },200)
//
//     //catch data
//     // socket.on("message",(data)=>{
//     //     console.log(data);
//     // })
//     //custom event data catch
//     // socket.on("customEvent",(data)=>{
//     //     console.log(data);
//     // })
//
//     //Broadcast
//     io.sockets.emit("broadcastEvn","Broadcasting on!!")
//
//
//     //user disconnected event
//     socket.on("disconnect",function (){
//         console.log("User disconnected")
//     })
// })
//namespace
let nmspOne=io.of("/one");
nmspOne.on("connection",function (socket){
    nmspOne.emit("custEvn","This is from one");
})
let nmspTwo=io.of("/two");
nmspTwo.on("connection",(socket)=>{
    nmspTwo.emit("custEvn","This is from two");
})
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
expresServer.listen(8000,()=>{
    console.log("Server run success")
})