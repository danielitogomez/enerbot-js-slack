Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

const System = require("./System");
const Quote = require("./Quote");
const Coa = require("./Coa");

const funcs = [
    {
        "regex": /^(hello|hola)$/i, 
        "func": () => "¡Hola!"
    },
    {
        "regex": /^(holi)$/i, 
        "func": () => "¡Holi! :middle_enerbot:"
    },
    {
        "regex": /^(help|ayuda)/i, 
        "func": () => System.help()
    },
    {
        "regex": /^(c[oó]mo est[aá]s)/i, 
        "func": () => Quote.status()
    },
    {
        "regex": /(consejo|pregunta)(.*?)/i, 
        "func": () => Quote.advice()
    },
    {
        "regex": /(.*)beneficio/i, 
        "func": () => Quote.benefit()
    },
    {
        "regex": /pack$/i, 
        "func": () => System.pack()
    },
    {
        "regex": /flaite/i, 
        "func": (text) => Coa.translate(text)
    }
]


const apply = (text) => {
    let response;
    for(let func of funcs) {
        if(func.regex.test(text)) {
            response = func.func(text);
            break;
        }
    }
    console.log(response)
    return response;
}

module.exports = {apply}