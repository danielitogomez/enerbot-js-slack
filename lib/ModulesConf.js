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
      dir: "./System",
      functionName: "help"
    },
    {
      regex: new RegExp("^(c[oó]mo est[aá]s)", "i"),
      dir: "./Quote",
      functionName: "status"
    },
    {
      regex: new RegExp("(consejo|pregunta)(.*?)", "i"),
      dir: "./Quote",
      functionName: "advice"
    },
    {
      regex: new RegExp("(.*)beneficio", "i"),
      dir: "./Quote",
      functionName: "benefit"
    },
    {
      regex: new RegExp("pack$", "i"),
      dir: "./System",
      functionName: "pack"
    },
    {
      regex: new RegExp("flaite", "i"),
      dir: "./Coa",
      functionName: "translate"
    },
    {
      regex: new RegExp("hor[oó]scopo", "i"),
      dir: "./Engel",
      functionName: "magic"
    },
    {
      regex: new RegExp("(rules|reglas)$", "i"),
      dir: "./System",
      functionName: "rules"
    },
    {
      regex: new RegExp("cu\[aá\]nto para el 18", "i"),
      dir: "./TimeTo",
      functionName: "september"
    }
  ];
};
