const september = () => {
    const today = new Date();
    const sep = new Date(today.getFullYear(),9,18);
    const oneDay = 24*60*60*1000;
    const numberOfDays =  Math.round(Math.abs((sep.getTime() - today.getTime())/(oneDay)));
    let response = numberOfDays == 1 ? `Falta ${numberOfDays} día`: `Faltan ${numberOfDays} días`;
    if(numberOfDays === 0) {
        response = `:chile: ¡Hoy es 18! ¡A emborracharte!.`
    }
    else {
        response = `:chile: ${response} pa'l 18 de septiembre.`;
    }
    return response;
}
module.exports = { september }