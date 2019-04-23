const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const TimeTo = require("../../lib/TimeTo");
describe('Lib', () => {
    describe('TimeTo', () => {
        it('should return a time to 18 september', (done) => {
            const today = new Date();
            let response = ":chile: ¡Hoy es 18! ¡A emborracharte!.";
            let clock = sinon.useFakeTimers(new Date(today.getFullYear(),9,18).getTime());
            expect(TimeTo.september()).to.be.equal(response);

            response = ":chile: Faltan 17 días pa\'l 18 de septiembre.";
            sinon.useFakeTimers(new Date(today.getFullYear(),9,1).getTime());
            expect(TimeTo.september()).to.be.equal(response);

            response = ":chile: Falta 1 día pa\'l 18 de septiembre.";
            sinon.useFakeTimers(new Date(today.getFullYear(),9,17).getTime());
            expect(TimeTo.september()).to.be.equal(response);
            clock.restore();
            done();
        });
    });
});