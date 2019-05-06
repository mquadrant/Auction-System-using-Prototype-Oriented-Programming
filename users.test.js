const Users = require('./users');
const Auction = require('./auctions');

let charity = new Users('Charity', 'charity45@gmail.com', 'dhhS34*7');
let tommy = new Users('Tommy', 'ctommy@gmail.com', 'd3434*7');

describe('Creating two Users through the Users constructor', () => {

    it('should return a user object for the first user', () => {
        expect(charity.createUser()).toEqual({ id: 1, name: 'Charity', email: 'charity45@gmail.com', password: 'dhhS34*7' });
    });

    it('should return a user object for the second user', () => {
        expect(tommy.createUser()).toEqual({ id: 2, name: 'Tommy', email: 'ctommy@gmail.com', password: 'd3434*7' });
    });
});


describe('Creating two Auctions through the Users prototype', () => {

    it('should return an auction object for the first auction', () => {
        let createAuction = tommy.createAuction('Limousine 2019 Model', 'Latest Limo in town', 5000000);
        expect(createAuction).toEqual({
            id: 1, productName: 'Limousine 2019 Model', productDescription: 'Latest Limo in town',
            minimumBidAmount: 5000000, userId: 2
        });
    });

    it('should return an auction object for the second auction', () => {
        let createAuction = charity.createAuction('Silver Wrist Watch', 'Ancient wrist watch', 700000);
        expect(createAuction).toEqual({
            id: 2, productName: 'Silver Wrist Watch', productDescription: 'Ancient wrist watch',
            minimumBidAmount: 700000, userId: 1
        });
    });

});

describe('User should be able to view all auctions', () => {

    it('should return all available auctions', () => {
        let allAuctions = tommy.viewAllAuctions();
        expect(allAuctions).toEqual([{
            id: 1, productName: 'Limousine 2019 Model', productDescription: 'Latest Limo in town',
            minimumBidAmount: 5000000, userId: 2
        },
        {
            id: 2, productName: 'Silver Wrist Watch', productDescription: 'Ancient wrist watch',
            minimumBidAmount: 700000, userId: 1
        }]);
    });

});

describe('User viewing all owned auctions', () => {
    it('should return all owned auctions', () => {
        let ownedAuctions = tommy.viewMyAuctions();
        expect(ownedAuctions).toEqual([{
            id: 1, minimumBidAmount: 5000000, productDescription: "Latest Limo in town",
            productName: "Limousine 2019 Model", userId: 2
        }]);
    })
})

describe('User should bid on auction by ID', () => {
    it('should return bid on auction', () => {
        let makeBid = charity.makeBid(1, 6000000);
        expect(makeBid).toEqual({ auctionId: 1, bidAmount: 6000000, bidderName: "Charity", id: 1, productName: "Limousine 2019 Model", userId: 2 });
    })
    it('should return bid when another user bid on auction', () => {
        let makeBid = tommy.makeBid(2, 800000);
        expect(makeBid).toEqual({ auctionId: 2, bidAmount: 800000, bidderName: "Tommy", id: 2, productName: "Silver Wrist Watch", userId: 1 });
    })
    it('should give error as bid Amount is less than bid minimum', () => {
        let makeBid = tommy.makeBid(1, 10000);
        expect(makeBid).toEqual('Your Bidding Amount is less than the Miniumum which is 5000000');
    })

});

describe('User should view all bid on an auction by ID', () => {
    it('should return all bids made on an auction', () => {
        let viewBid = tommy.viewBidsOnAuction(1);
        expect(viewBid).toEqual([{ auctionId: 1, bidAmount: 6000000, bidderName: "Charity", id: 1, productName: "Limousine 2019 Model", userId: 2 }]);
    });

});