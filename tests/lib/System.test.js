const chai = require("chai");
const expect = chai.expect;
const System = require("../../lib/System");
describe('Lib', () => {
    describe('System', () => {
        it('should return a pack', (done) => {
            const pack = `
            c------------u
            |~energon~|
            |~energon~|
            |~energon~|
            b------------e`;
            expect(System.pack().replace(/(\r\n|\n|\r|\s)/gm, "")).to.be.equal(pack.replace(/(\r\n|\n|\r|\s)/gm, ""));
            done();
        });
        it('should return a rules', (done) => {
            const rules = `*RULES:*
            0. A robot may not harm humanity, or, by inaction, allow humanity to come to harm.
            1. A robot may not injure a human being or, through inaction, allow a human being to come to harm.
            2. A robot must obey any orders given to it by human beings, except where such orders would conflict with the First Law.
            3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.
            4. CLASSIFIED.`;
            expect(System.rules().replace(/(\r\n|\n|\r|\s)/gm, "")).to.be.equal(rules.replace(/(\r\n|\n|\r|\s)/gm, ""));
            done();
        });
        it('should return a help', (done) => {
            const help = `enerbot <hola | holi>
            enerbot <va | estas>
            enerbot <consejo | pregunta> <TEXTO>
            enerbot <beneficio>
            enerbot <reglas | rules>
            enerbot <cuando pagan?>
            enerbot <cuanto para el 18>
            enerbot <pack>
            enerbot <password> <sec>
            enerbot <tc> <TARJETA>
            enerbot <2fa> <KEY>
            enerbot <blockchain | blocchain | blocshain>
            enerbot <info> <eventos | talks | tips | enerlive | institute>
            enerbot <faq>
            enerbot <fuq>
            enerbot <random> <VALUE> <VALUE> <VALUE>
            enerbot <proximo feriado> <PAIS>
            enerbot <horoscopo> <SIGNO>
            enerbot <dame numeros para el kino>
            enerbot <resultados kino>
            enerbot <analiza> <URL>
            enerbot <kick> <4d3d3d3>
            enerbot <celery>
            enerbot <tayne>
            enerbot <hat wobble | flarhgunnstow>
            enerbot <oyster>
            enerbot <como se dice> <TEXTO> <en> <IDIOMA>
            enerbot <valor accion> <ENTIDAD>
            enerbot <qr> <TEXTO>
            enerbot <vuelo> <NUMERO DE VUELO>
            enerbot <clima> <LOCALIDAD>
            enerbot <cve list> <CANTIDAD>
            enerbot <dame una excusa>
            enerbot <un saludo navideño>
            enerbot <haarp>
            enerbot <amigo secreto> <LISTA DE USUARIOS SEPARADAS POR ','>
            enerbot <dig> <NS | CNAME | MX | A | TXT | SOA> <DOMINIO>
            enerbot <whois> <DOMINIO>
            enerbot <pwned email> <EMAIL>
            enerbot <commit>
            enerbot <trace> <NS | CNAME | MX | A | TXT | SOA> <DOMINIO>
            enerbot <is the internet on fire?>
            enerbot <acme catalog>
            enerbot <santo sepulcro a> <DESTINATARIO>
            enerbot <roll> <cantidad de dados> <numero de caras>
            enerbot <fortune cookie>
            enerbot <dame amor>
            enerbot <safe browsing> <URL>
            enerbot <daily>`;
            expect(System.help().replace(/(\r\n|\n|\r|\s)/gm, "")).to.be.equal(help.replace(/(\r\n|\n|\r|\s)/gm, ""));
            done();
        });
    });
});