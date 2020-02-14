let express = require("express");
let fs = require("fs");
let User = require("./Model/user")

// Set up Server
let app = express();
let PORT = 3001;
app.listen(PORT, () => { console.log("Listen on port  " + PORT) })

// Set Users List and Chat Bot
let ChatBotUser = new User("ChatBot", "-1");
let userList = new Map();
userList.set(ChatBotUser.id , ChatBotUser);

// Set Message History
let welcomeMessage = {
    username: ChatBotUser.userName, 
    message: "Welcome to the ChatRoom!", 
    timestamp: new Date().toDateString()
};
let messages = [welcomeMessage];

let HttpRequestController = require("./Controller/HttpRequestController");
new HttpRequestController(app,express,messages,userList);