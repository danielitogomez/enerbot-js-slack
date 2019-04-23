const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const Quote = require("../../lib/Quote");
describe('Lib', () => {
    describe('Quote', () => {
        before(()=> {
            Array.prototype.randomElement = sinon.fake.returns('random element');
        });
        it('should return a advice', (done) => {        
            expect(Quote.advice()).to.be.equal('random element');
            done();
        });
        it('should return a status', (done) => {        
            expect(Quote.status()).to.be.equal('random element');
            done();
        });
        it('should return a benefit', (done) => {        
            expect(Quote.benefit()).to.be.equal('random element');
            done();
        });
    });
});