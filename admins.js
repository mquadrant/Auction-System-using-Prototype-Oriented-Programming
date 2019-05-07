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

Admins.prototype.deleteUser = function (userId) {
    return db.users.filter((user) => user.id !== userId);
}

Admins.prototype.deleteAuction = function (auctionId) {
    return db.auctions.filter((auction) => auction.id !== auctionId);
}

Admins.prototype.winnerAuction = function (auctionID) {
    let bidsOnAuction = db.bids.filter((bid) => bid.auctionId === auctionID)
    let len = bidsOnAuction.length;
    return bidsOnAuction[len - 1].bidderName;
}

module.exports = Admins;