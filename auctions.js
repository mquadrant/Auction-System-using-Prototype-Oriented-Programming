const db = require('./db');
const Bids = require('./bids');

function Auction(productName, productDescription, minimumBidAmount, userId) {
    this.productName = productName;
    this.productDescription = productDescription;
    this.minimumBidAmount = minimumBidAmount;
    this.userId = userId;

    //Saving product for auction into the auction db
    let length = db.auctions.length;
    let id = length === 0 ? 1 : db.auctions[length - 1].id + 1;
    this.id = id;
    db.auctions.push({
        id,
        productName: this.productName,
        productDescription: this.productDescription,
        minimumBidAmount: this.minimumBidAmount,
        userId: this.userId,
    });
    return db.auctions[id - 1];
}

Auction.prototype = Object.create(Bids.prototype);
Auction.prototype.constructor = Auction;

Auction.prototype.createAuction = function (productName, productDescription, minimumBidAmount) {
    return new Auction(productName, productDescription, minimumBidAmount, this.id);
}

Auction.prototype.viewAllAuctions = function () {
    return db.auctions;
}



module.exports = Auction;