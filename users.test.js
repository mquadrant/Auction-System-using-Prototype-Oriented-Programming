const Users = require('./users');

describe('Creating User through the constructor',()=>{

    it('should return a user object',()=>{
        let charity = new Users('Charity','charity45@gmail.com','dhhS34*7');
        expect(charity).toMatch({name:'Charity',email:'charity45@gmail.com',password:'dhhS34*7'});
    });
});