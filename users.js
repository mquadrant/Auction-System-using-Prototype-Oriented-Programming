const db = require('./db');

function Users(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;

    //Saving users data into the users db

    let length = db.users.length;
    let id = length === 0 ? 1 : ++db.users[length - 1].id;
    db.users.push({
        id,
        name: this.name,
        email: this.email,
        password: this.password
    });
    return db.users[id - 1];

}



module.exports = Users;