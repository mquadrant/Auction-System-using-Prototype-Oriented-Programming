const db = require('./db');

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

Auction.prototype.createAuction = function (productName, productDescription, minimumBidAmount) {
    return new Auction(productName, productDescription, minimumBidAmount, this.id);
}

Auction.prototype.viewAllAuctions = function () {
    return db.auctions;
}

function Bid(productId,productName, userId, bidderName, bidAmount) {
    this.productId = productId;
    this.bidAmount = bidAmount;
    this.userId = userId;
    this.productName = productName;
    this.bidderName = bidderName;
    //Saving bids for into the db
    let length = db.bids.length;
    let id = length === 0 ? 1 : db.bids[length - 1].id + 1;
    this.id = id;
    db.bids.push({
        id,
        productId: this.productId,
        productName: this.productName,
        bidderName: this.bidderName,
        bidAmount: this.bidAmount,
        userId: this.userId,
    });
    return db.bids[id - 1];
}

Bid

module.exports = [Auction, Bid];