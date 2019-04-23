const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const proxyquire = require("proxyquire");
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
        it('should return nothing if function dont exist', (done) => {
            let fn = Loader.getFunction('./../lib/System', 'paack');
            expect(fn).to.be.undefined;  
            done();         
        });
        it('should return from cache', (done) => {
            let Loader = proxyquire('../../lib/Loader', {
                './../lib/System': {
                    pack: ()=> "pack",
                    pack2: ()=> "pack2"
                }
            })
            let fn = Loader.getFunction('./../lib/System', 'pack');
            expect(typeof fn).to.be.equal("function");
            fn = Loader.getFunction('./../lib/System', 'pack2');
            expect(typeof fn).to.be.equal("function");
            done();         
        });
    });
});