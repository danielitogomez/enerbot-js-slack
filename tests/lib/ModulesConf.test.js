const chai = require("chai");
const sinon = require("sinon");
const ModulesConf = require('../../lib/ModulesConf');
const expect = chai.expect;
describe('Lib', () => {
    describe('ModulesConf', () => {
        it('should a correct quantity of modules', (done) => {    
            expect(ModulesConf().length).to.be.equal(11);
            done();
        });
    });
});