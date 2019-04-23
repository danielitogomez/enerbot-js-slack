const { text } = require("micro");
const { parse } = require("querystring");
const { run } = require("./lib/Runner");
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}
module.exports = async (req, res) => {
    const body = parse(await text(req));
    let result, attachments;
    try {
        result = await run(body.text)
    } catch (error) {
        result = error.message;
        attachments = [{ text: error.stack }];
    }
    const response_type = "in_channel";
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ response_type, text: result, attachments }));

};
