const chai = require("chai");
const sinon = require("sinon");
const proxyquire = require('proxyquire');
const expect = chai.expect;
describe('Lib', () => {
    let microText = () => Promise.resolve();
    let queryStringParser = "hola";
    let runner = () => Promise.resolve("hola");
    let writeHead = sinon.spy();
    let end = sinon.spy();
    const getCommand = () => {
        return proxyquire('../command', {
            'micro':  {
                text: microText
            },
            'queryString': queryStringParser,
            './lib/Runner':  {
                run: runner
            }
        })
    }
    let res = {
        writeHead: writeHead,
        end: end
    }
    describe('Command', () => {
        it('should return a correct response', (done) => {    
             let Command = getCommand();
             Command(null, res)
             .then(() => {
                let response = {
                    response_type: 'in_channel',
                    text: 'hola',
                    attachments: undefined 
                };
                expect(writeHead.calledOnce).to.be.true;
                expect(end.calledOnce).to.be.true;
                expect(writeHead.calledWithExactly(200, { "Content-Type": "application/json" })).to.be.true;
                expect(end.calledWithExactly(JSON.stringify(response))).to.be.true;
                writeHead.resetHistory();
                end.resetHistory();
                done();
             });
        });
        it('should return a correct response for error', (done) => { 
            runner = () => Promise.reject({
                message: "mensaje",
                stack: "stack"
            });   
            let Command = getCommand();
            Command(null, res)
            .then(() => {
                let response = { 
                    response_type: 'in_channel',
                    text: 'mensaje',
                    attachments: [ { text: 'stack' } ] 
                }
               expect(writeHead.calledOnce).to.be.true;
               expect(end.calledOnce).to.be.true;
               expect(writeHead.calledWithExactly(200, { "Content-Type": "application/json" })).to.be.true;
               expect(end.calledWithExactly(JSON.stringify(response))).to.be.true;
               done();
            })
       });
       it('should array object has the randomElement function', (done) => {   
        let Command = getCommand();
        Command(null, res)
        .then(() => {
            const arr = ["1","2"]
            expect(typeof arr.randomElement).to.be.equal("function");
            expect(arr.randomElement()).to.not.be.null;
            done();
        })
   });
    });
});