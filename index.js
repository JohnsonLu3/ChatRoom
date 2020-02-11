let express = require("express");
let app = express();
let PORT = 3001;
app.listen(PORT,()=>{console.log("Listen on port  " + PORT)})

let welcomeMessage = ["ChatBot","Welcome to the ChatRoom!"];
let messages = [welcomeMessage];

app.use(express.json({
    limit : '1mb',
    type: ['application/json', 'text/plain']
}));

app.get("/getMessages", (req, res)=>{
    res.json(messages);
});

app.post("/sendMessage", (req, res)=>{
    const user =  req.body.user;
    const message = req.body.message;
    console.log(req.body)
    console.log("receiving message => " + user + " : " + message);
    messages.push([user,message]);

    res.json(messages);
})