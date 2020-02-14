class User{
    constructor(userName, id){
        this.color = "#7fdbff";
        this.userName = userName;
        this.id = id;
        const date = new Date();
        this.joined = date.toUTCString();
    }
}module.exports = User