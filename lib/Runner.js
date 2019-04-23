const modulesConf = require("./ModulesConf");
const run = async text => {
  let response;
  for (let mdl of modulesConf()) {
    if (mdl.regex.test(text)) {
      if (!mdl["wrapper"]) {
        response = mdl.text;
        break;
      } else {
        if (typeof mdl.wrapper === "function") {
          response = mdl.wrapper(text);
          break;
        }
      }
    }
  }
  return response;
};

module.exports = { run };
