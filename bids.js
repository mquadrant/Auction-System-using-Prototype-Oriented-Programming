const db = require('./db');

function Bid(auctionId, productName, userId, bidderName, bidAmount) {
    this.auctionId = auctionId;
    this.bidAmount = bidAmount;
    this.userId = userId;
    this.productName = productName;
    this.bidderName = bidderName;
}

Bid.prototype.makeBid = function (auctionId, bidAmount) {
    
    new Bid(auctionId, productName, this.id, this.name, bidAmount);

    //Saving bids for into the db
    let length = db.bids.length;
    let id = length === 0 ? 1 : db.bids[length - 1].id + 1;
    this.id = id;
    db.bids.push({
        id,
        auctionId: this.auctionId,
        productName: this.productName,
        bidderName: this.bidderName,
        bidAmount: this.bidAmount,
        userId: this.userId,
    });
    return db.bids[id - 1];
}

Bid.prototype.viewBidsOnAuction = function (auctionId) {
    return db.bids.filter((bid) => bid.auctionId == auctionId);
}

module.exports = Bid;