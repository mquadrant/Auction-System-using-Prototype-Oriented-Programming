const db = require('./db');

function Auction(productName, productDescription, minimumBidAmount,userId) {
this.productName = productName;
this.productDescription = productDescription;
this.minimumBidAmount = minimumBidAmount;
this.userId = userId;

//Saving product for auction into the auction db

let length = db.auctions.length;
let id = length === 0 ? 1 : ++db.auctions[length - 1].id;
db.auctions.push({
    id,
    productName: this.productName,
    productDescription: this.productDescription,
    minimumBidAmount: this.minimumBidAmount,
    userId : this.userId,
});
return db.auctions[id - 1];
}

module.exports = Auction;