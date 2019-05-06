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


describe('Creating Auctions through the Users prototype', () => {

    it('should return an auction object for the first auction', () => {
        let createAuction = tommy.createAuction('Limousine 2019 Model', 'Latest Limo in town', 5000000,2);
        expect(createAuction).toEqual({
            id: 1, productName: 'Limousine 2019 Model', productDescription: 'Latest Limo in town',
            minimumBidAmount: 5000000, userId: 2
        });
    });

    

});

describe('User should be able to view all auctions', () => {

    it('should all available auctions', () => {
        let allAuctions = tommy.viewAllAuctions();
        expect(allAuctions).toEqual([{
            id: 1, productName: 'Limousine 2019 Model', productDescription: 'Latest Limo in town',
            minimumBidAmount: 5000000, userId: 2
        }]);
    });

});