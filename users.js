const db = require('./db');
const Auction = require('./auctions');
const Bid = require('./bids');

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

Users.prototype.makeBid = function (auctionId, bidAmount) {
    for (let auction in db.auctions) {
        if (db.auctions[auction].id === auctionId) {
            productName = db.auctions[auction].productName;
            userId = db.auctions[auction].userId;
            if (db.auctions[auction].minimumBidAmount >= bidAmount) {
                return "Your Bidding Amount is less than the Miniumum which is " + db.auctions[auction].minimumBidAmount;
            }
        }
    }
    return new Bid(auctionId, productName, userId, this.name, bidAmount);

}
module.exports = Users;