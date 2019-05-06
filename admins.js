const db = require('./db');
const Auction = require('./auctions');
const Users = require('./users');

function Admins(name, email, password) {
    Users.call(this, name, email, password);

}

Admins.prototype = Object.create(Auction.prototype);
Admins.prototype.constructor = Users;

Admins.prototype.createAdmin = function () {
    let length = db.admins.length;
    let id = length === 0 ? 1 : db.admins[length - 1].id + 1;
    this.id = id;
    db.admins.push({
        id,
        name: this.name,
        email: this.email,
        password: this.password
    });
    return db.admins[id - 1];
}

Admins.prototype.viewAllUsers = function () {
    return db.users;
}



module.exports = Admins;