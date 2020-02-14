class User{
    constructor(userName, id){
        this.color = "#7fdbff";
        this.userName = userName;
        this.id = id;
        this.joined = new Date("YYYY/MM/DD HH:MM:SS");
    }
}module.exports = User