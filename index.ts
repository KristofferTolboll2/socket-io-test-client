import { io } from "socket.io-client";


console.log("Starting socket server")

const wsSocketPrefix = "/messages-ws"

let timeout = setInterval(() => {

const socket = io("ws://staging.dedi.app", {
  path: wsSocketPrefix,
  query: { deviceType: 'ANDROID', userId: 1 },
  autoConnect: true,
  reconnection: true
});

if(socket){
  console.log("Trying to connect to the socket on the server. ")
}

}, 2000)
