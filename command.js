const { text } = require("micro");
const { parse } = require("querystring");
const { apply } = require("./lib/funcs");
module.exports = async (req, res) => {
    // Parse code received through req
    const body = parse(await text(req));
    let result, attachments;
    try {
        // Pass code to function imported through eval
        result = await commandController(body.text)
    } catch (error) {
    // Capture any errors
    result = error.message;
    attachments = [{ text: error.stack }];
    }
    const response_type = "in_channel";

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ response_type, text: result, attachments }));

};

const commandController = (text) => {
    return apply(text)
}

