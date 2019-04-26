const Users = require('./users');

describe('Creating two Users through the constructor',()=>{

    it('should return a user object for the first user',()=>{
        let charity = new Users('Charity','charity45@gmail.com','dhhS34*7');
        expect(charity).toEqual({id: 1, name:'Charity',email:'charity45@gmail.com',password:'dhhS34*7'});
    });

    it('should return a user object for the second user',()=>{
        let charity = new Users('Tommy','ctommy@gmail.com','d3434*7');
        expect(charity).toEqual({id: 2, name:'Tommy',email:'ctommy@gmail.com',password:'d3434*'});
    });
});