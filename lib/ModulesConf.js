const System = require("./System");
const Quote = require("./Quote");
const Coa = require("./Coa");
const Engel = require("./Engel");
const TimeTo = require("./TimeTo");

module.exports = () => {
  return [
    {
      regex: new RegExp("^(hello|hola)$", "i"),
      text: "¡Hola!"
    },
    {
      regex: new RegExp("^(holi)$", "i"),
      text: "¡Holi! :middle_enerbot:"
    },
    {
      regex: new RegExp("^(help|ayuda)", "i"),
      wrapper: () => System.help()
    },
    {
      regex: new RegExp("^(c[oó]mo est[aá]s)", "i"),
      wrapper: () => Quote.status()
    },
    {
      regex: new RegExp("(consejo|pregunta)(.*?)", "i"),
      wrapper: () => Quote.advice()
    },
    {
      regex: new RegExp("(.*)beneficio", "i"),
      wrapper: () => Quote.benefit()
    },
    {
      regex: new RegExp("pack$", "i"),
      wrapper: () => System.pack()
    },
    {
      regex: new RegExp("flaite", "i"),
      wrapper: (text) => Coa.translate(text)
    },
    {
      regex: new RegExp("hor[oó]scopo", "i"),
      wrapper: (text) => Engel.magic(text)
    },
    {
      regex: new RegExp("(rules|reglas)$", "i"),
      wrapper: () => System.rules()
    },
    {
      regex: new RegExp("cu\[aá\]nto para el 18", "i"),
      wrapper: () => TimeTo.september()
    }
  ];
};
