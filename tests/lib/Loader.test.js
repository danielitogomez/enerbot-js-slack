const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const Loader = require("../../lib/Loader");
describe('Lib', () => {  
    describe('Loader', () => {
        it('should return a function if module exist', (done) => {
            let fn = Loader.getFunction('./../lib/System', 'pack');
            expect(typeof fn).to.be.equal("function")   
            done();         
        });
        it('should return nothing if module dont exist', (done) => {
            let fn = Loader.getFunction('./../lib/Systems', 'pack');
            expect(fn).to.be.undefined;  
            done();         
        });
    });
});