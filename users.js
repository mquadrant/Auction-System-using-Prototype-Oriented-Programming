const db = require('./db');

function Users(name,email,password){
    this.name = name;
    this.email = email;
    this.password = password;

    //Add to the users table in the db
    let id = db.users.length === 0 ? 1 : ++db.users.length;
    db.users.push({
        id,
        name : this.name,
        email : this.email,
        password : this.password
    });
}