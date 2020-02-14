class HttpRequestController{

    constructor(app,express, messages){
        this.app = app;
        this.express = express;
        this.messages = messages;
        this.setListeners();
    }

    setListeners(){
        this.app.use(this.express.json({
            limit: '1mb',
            type: ['application/json', 'text/plain']
        }));
        
        this.app.get("/getMessages", (req, res) => {
            res.json(this.messages);
        });
        
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
    }    
}module.exports = HttpRequestController;