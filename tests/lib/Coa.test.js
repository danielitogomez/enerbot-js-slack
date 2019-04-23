const chai = require("chai");
const sinon = require("sinon");
const proxyquire = require('proxyquire');
const expect = chai.expect;
describe('Lib', () => {
    let Coa = proxyquire('../../lib/Coa', {
        'chilenify':  {
            default: (text) => {
                return text;
            }
        }
    })
    describe('Coa', () => {
        it('should return a translate', (done) => {        
            expect(Coa.translate('flaite oye si')).to.be.equal('oye si');
            done();
        });
    });
});