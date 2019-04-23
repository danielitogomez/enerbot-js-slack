const status = () => {
  return [
    "Trabajo muy duro, como un esclavo... :musical_note:"
  ].randomElement();
};
const advice = () => {
  return [
    "En mi opinión, sí",
    "Es cierto",
    "Es decididamente así",
    "Probablemente",
    "Buen pronóstico",
    "Todo apunta a que sí",
    "Sin duda",
    "Sí",
    "Sí - definitivamente",
    "Debes confiar en ello",
    "Respuesta vaga, vuelve a intentarlo",
    "Pregunta en otro momento",
    "Será mejor que no te lo diga ahora",
    "No puedo predecirlo ahora",
    "Concéntrate y vuelve a preguntar",
    "No cuentes con ello",
    "Mi respuesta es no",
    "Mis fuentes me dicen que no",
    "Las perspectivas no son buenas",
    "Muy dudoso"
  ].randomElement();
};

const benefit = () => {
  return [
    "Tómate la tarde libre, proletario.",
    "¡4 semanas de vacaciones pagadas!",
    "Escoje el computador y la silla que quieras.",
    "Snacks, café, frutas y bebidas libre todos los días todo el día.",
    "Aguinaldo en septiembre y diciembre.",
    "Bono anual por metas cumplidas.",
    "Seguro de salud y dental para ti y tu familia.",
    "Bono anual sólo por ser un :energon: dev",
    "Permisos para celebrar y compartir en la :energon: Conf"
  ].randomElement();
};
module.exports = { status, advice, benefit };
