const chai = require("chai");
const sinon = require("sinon");
const proxyquire = require('proxyquire').noPreserveCache();
const expect = chai.expect;
describe('Lib', () => {
    let modulesConf = () => [];

    const getRunner = () => {
        return  proxyquire('../../lib/Runner', {
            './ModulesConf':  modulesConf
        });
    }
    describe('Runner', () => {
        it('should return nothing if module dont exist', (done) => {
            let Runner = getRunner();
            Runner.run('horoscopo aries')
            .then((response) => {
                expect(response).to.be.undefined;
                done()
            })
            
        });
        it('should return nothing if regex dont exist', (done) => {
            modulesConf = () => {
                return [{
                "regex": new RegExp('packs$', 'i')
                }];
            }
            let Runner = getRunner();
            Runner.run('pack')
            .then((response) => {
                expect(response).to.be.undefined;
                done()
            })
            
        });
        it('should return nothing if function dont exist', (done) => {
            modulesConf = () => {
                return [{
                "regex": new RegExp('pack$', 'i'),
                "wrapper": {}
                }]
            };
            getFunction = () => null;
            let Runner = getRunner();
            Runner.run('pack')
            .then((response) => {
                expect(response).to.be.undefined;
                done()
            })
            
        });
        it('should return text if dir dont exist', (done) => {
            modulesConf = () => {
                return [{
                "regex": new RegExp('hola', 'i'), 
                "text" : "HOLANDA"
                }]
            };
            let Runner = getRunner();
            Runner.run('hola')
            .then((response) => {
                expect(response).to.be.equal('HOLANDA');
                done()
            })
            
        });
        it('should return if module exist', (done) => {
            modulesConf = () => {
                return [{
                "regex": new RegExp('pack$', 'i'), 
                "wrapper": () => "hola"
                }]
            };
            responseFunction = "pack";
            let Runner = getRunner();
            Runner.run('pack')
            .then((response) => {
                expect(response).to.be.equal("hola");
                done()
            });
            
        });
    });
});