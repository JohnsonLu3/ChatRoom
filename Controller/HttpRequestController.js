let User = require("../Model/user")

class HttpRequestController{

    constructor(app,express, messages, users){
        this.app = app;
        this.express = express;
        this.messages = messages;
        this.users = users;

        this.app.use(this.express.json({
            limit: '1mb',
            type: ['application/json', 'text/plain']
        }));

        this.setGetRequest();
        this.setPostRequest();
    }

    setGetRequest(){
        this.app.get("/getMessages", (req, res) => {
            res.json(this.messages);
        });
        
    }   
    
    setPostRequest(){
        this.app.post("/sendMessage", (req, res) => {
            const {user, message, timestamp} = req.body;
            console.log("receiving message => " + user.userName + " : " + message + " : " + timestamp);
            this.messages.push({
                id: Math.floor(Math.random() * 100000000),
                username: user.userName, 
                message: message, 
                timestamp: timestamp
            });
        
            res.json(this.messages);
        })

        this.app.post("/createUser", (req, res) => {
            const newUser = new User(req.body.user.userName, req.body.user.id);
            this.users.set(newUser.id, newUser)
            console.log("created new user => " + newUser.id + " : " + newUser.userName);
            console.log(this.users)
            res.end();
        })
    }

}module.exports = HttpRequestController;