const Users = require('./users');
const Auction = require('./auctions');

describe('Creating two Users through the Users constructor',()=>{

    it('should return a user object for the first user',()=>{
        let charity = new Users('Charity','charity45@gmail.com','dhhS34*7');
        expect(charity).toEqual({id: 1, name:'Charity',email:'charity45@gmail.com',password:'dhhS34*7'});
    });

    it('should return a user object for the second user',()=>{
        let charity = new Users('Tommy','ctommy@gmail.com','d3434*7');
        expect(charity).toEqual({id: 2, name:'Tommy',email:'ctommy@gmail.com',password:'d3434*7'});
    });
});

describe('Creating two Auctions through the Auction constructor',()=>{

    it('should return an auction object for the first auction',()=>{
        let auctionOne = new Auction('Golden shoe lace','Shoe lace used by Bill Gate',100000,1);
        expect(auctionOne).toEqual({id: 1, productName:'Golden shoe lace',productDescription:'Shoe lace used by Bill Gate',
        minimumBidAmount:100000,userId:1});
    });
    it('should return an auction object for the first auction',()=>{
        let auctionTwo = new Auction('Silver wrist watch','Ancient Silver watch of all time',303000,2);
        expect(auctionTwo).toEqual({id: 2, productName:'Silver wrist watch',productDescription:'Ancient Silver watch of all time',
        minimumBidAmount:303000,userId:2});
    });

});