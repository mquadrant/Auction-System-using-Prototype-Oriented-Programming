const db = require('./db');
const AuctionObject = require('./auctions');

const Auction = AuctionObject[0];

function Users(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;

}

Users.prototype = Object.create(Auction.prototype);
Users.prototype.constructor = Users;

Users.prototype.createUser = function () {
    let length = db.users.length;
    let id = length === 0 ? 1 : db.users[length - 1].id + 1;
    this.id = id;
    db.users.push({
        id,
        name: this.name,
        email: this.email,
        password: this.password
    });
    return db.users[id - 1];
}

Users.prototype.viewMyAuctions = function () {
    return db.auctions.filter((auction) => auction.userId == this.id);
}
module.exports = Users;