const chai = require("chai");
const sinon = require("sinon");
const proxyquire = require('proxyquire');
const expect = chai.expect;
describe('Lib', () => {
    let getSpy = sinon.spy()
    let Engel = proxyquire('../../lib/Engel', {
        'axios':  {
            get: getSpy
        }
    })
    describe('Engel', () => {
        it('should return a sign result', (done) => {    
            Engel.magic('aries');  
            expect(getSpy.calledOnce).to.be.true;            
            done();
        });
        it('should return a error', (done) => {    
             Engel.magic('áries')
             .then((response) => {
                expect(response).to.be.equal('Lo siento amigo. Tiene que ser un signo válido y sin acento ni mayúsculas');            
                done();
             })
             .catch();
        });
    });
});