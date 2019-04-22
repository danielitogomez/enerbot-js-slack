const axios  = require("axios");
const magic = async(text) => {
    let t = text.split(" ");
    t.shift();
    const h = await axios.get("https://api.adderou.cl/tyaas/");
    const sign = h.data.horoscopo[t[0]];
    const response = ` Horóscopo para *${t[0]}* hoy: ${new Date()}
    :heart:*Amor:* ${sign.amor}
    :medical_symbol:*Salud:* ${sign.salud}
    :moneybag:*Dinero:* ${sign.dinero}
    :art:*Color:* ${sign.color}
    :8ball:*Número:* ${sign.numero}`

    return response;
}

module.exports = {magic}