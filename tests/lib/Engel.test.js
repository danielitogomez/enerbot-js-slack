const chai = require("chai");
const sinon = require("sinon");
const proxyquire = require('proxyquire');
const expect = chai.expect;
describe('Lib', () => {
    let Engel = proxyquire('../../lib/Engel', {
        'axios':  {
            get: () => {
                return Promise.resolve({
                    data:{
                        horoscopo: 
                            {
                                aries: {
                                    amor: "amor",
                                    dinero: "dinero",
                                    salud: "salud",
                                    color: "color",
                                    numero: "numero"
                                }
                            }
                    }
                })
            }
        }
    })
    describe('Engel', () => {
        it('should return a sign result', (done) => {  
            let response = `Horóscopo para *aries* hoy: Sat Oct 01 2011 00:00:00 GMT-0300 (GMT-03:00)
            :heart:*Amor:* amor
            :medical_symbol:*Salud:* salud
            :moneybag:*Dinero:* dinero
            :art:*Color:* color
            :8ball:*Número:* numero`.replace(/(\r\n|\n|\r|\s)/gm, "");
            const clock = sinon.useFakeTimers(new Date(2011,9,1).getTime());
  
            Engel.magic('horoscopo aries')
            .then((aries) => {
                expect(aries.replace(/(\r\n|\n|\r|\s)/gm, "")).to.be.equal(response);   
                clock.restore();         
                done();
            })
            .catch((e) => {
                console.log("TUTIN",e)
            })
            
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