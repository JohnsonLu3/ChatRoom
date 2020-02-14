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
    }

    setGetRequest(){
       
        this.app.get("/getMessages", (req, res) => {
            res.json(this.messages);
        });
        
    }   
    
    setPostRequest(){
        this.app.post("/sendMessage", (req, res) => {
            const user = req.body.user;
            const message = req.body.message;
            console.log("receiving message => " + user + " : " + message);
            this.messages.push({
                username: req.body.user, 
                message: req.body.message, 
                timestamp: req.body.timestamp
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