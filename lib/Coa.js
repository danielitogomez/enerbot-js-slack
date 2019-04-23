const chilenify = require("chilenify").default;
const translate = text => {
  let t = text.split(" ");
  t.shift();
  return chilenify(t.join(" "), { perv: true });
};

module.exports = { translate };
