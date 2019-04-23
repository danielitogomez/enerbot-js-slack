const chai = require("chai");
const proxyquire = require("proxyquire");
const ModulesConf = proxyquire('../../lib/ModulesConf', {
    "./System":{
        help: () => "hola",
        pack: () => "hola",
        rules: () => "hola"
    },
    "./Quote":{
        status: () => "hola",
        advice: () => "hola",
        benefit: () => "hola"
    },
    "./Coa": {
        translate: () => "hola",
    },
    "./Engel":{
        magic: () => "hola",
    },
    "./TimeTo": {
        september: () => "hola",
    }
});
const expect = chai.expect;
describe('Lib', () => {
    describe('ModulesConf', () => {
        it('should a correct quantity of modules', (done) => {    
            expect(ModulesConf().length).to.be.equal(11);
            done();
        });
        it('should have a wrapper function', (done) => { 
            for (let mdl of ModulesConf()) {
                if(mdl["wrapper"]) {
                    expect(mdl.wrapper()).to.be.equal("hola");
                }
            }              
            done();
        });
    });
});