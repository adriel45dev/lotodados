import TModalidade from "./shared/types/modalidade.types";
const URI_CAIXA = "https://loterias.caixa.gov.br/Paginas";
const MODALIDADES_LOTERIA: TModalidade[] = [
  {
    title: "+MILIONÁRIA",
    name: "maismilionaria",
    primaryColor: "#2e317a",
    secondaryColor: "#59629f",
    totalNumbers: 51,
    startPoin: 1,
    endPoint: 50,
    minNumbers: 6,
    channel: `${URI_CAIXA}/Mais-Milionaria.aspx`,
  },
  {
    title: "MEGA-SENA",
    name: "megasena",
    primaryColor: "#209869",
    secondaryColor: "#8fcbb3",
    totalNumbers: 61,
    startPoin: 1,
    endPoint: 60,
    minNumbers: 6,
    channel: `${URI_CAIXA}/Mega-Sena.aspx`,
  },
  {
    title: "LOTOFÁCIL",
    name: "lotofacil",
    primaryColor: "#930089",
    secondaryColor: "#C87fc3",
    totalNumbers: 26,
    startPoin: 1,
    endPoint: 25,
    minNumbers: 15,
    channel: `${URI_CAIXA}/Lotofacil.aspx`,
  },
  {
    title: "QUINA",
    name: "quina",
    primaryColor: "#260085",
    secondaryColor: "#927FC1",
    totalNumbers: 81,
    startPoin: 1,
    endPoint: 80,
    minNumbers: 6,
    channel: `${URI_CAIXA}/Quina.aspx`,
  },
  {
    title: "LOTOMANIA",
    name: "lotomania",
    primaryColor: "#F78100",
    secondaryColor: "#FABF7F",
    totalNumbers: 100,
    startPoin: 0,
    endPoint: 99,
    minNumbers: 6,
    channel: `${URI_CAIXA}/Lotomania.aspx`,
  },
  {
    title: "TIMEMANIA",
    name: "timemania",
    primaryColor: "#02FF02",
    secondaryColor: "#99FF99",
    totalNumbers: 81,
    startPoin: 1,
    endPoint: 80,
    minNumbers: 6,
    channel: `${URI_CAIXA}/Timemania.aspx`, // time do coração
  },
  {
    title: "DUPLA SENA",
    name: "duplasena",
    primaryColor: "#A61324",
    secondaryColor: "#D28891",
    totalNumbers: 51,
    startPoin: 1,
    endPoint: 50,
    minNumbers: 6,
    channel: `${URI_CAIXA}/Dupla-Sena.aspx`, // dois sorteios
  },
  {
    title: "DIA DE SORTE",
    name: "diadesorte",
    primaryColor: "#CB852B",
    secondaryColor: "#EEC48B",
    totalNumbers: 32,
    startPoin: 1,
    endPoint: 31,
    minNumbers: 6,
    channel: `${URI_CAIXA}/Super-Sete.aspx`, // mes da sorte
  },

  {
    title: "SUPER SETE",
    name: "supersete",
    primaryColor: "#A8CF44",
    secondaryColor: "#DDE89C",
    totalNumbers: 10,
    startPoin: 0,
    endPoint: 9,
    minNumbers: 6,
    channel: `${URI_CAIXA}/Super-Sete.aspx`,
  },
];

const THEME_COLOR = {
  blue: "#0065B7",
  orange: "#F99500",
  gray: "#ADC0C4",
};

export { MODALIDADES_LOTERIA, URI_CAIXA, THEME_COLOR };

// [
//     "maismilionaria",
//     "megasena",
//     "lotofacil",
//     "quina",
//     "lotomania",
//     "timemania",
//     "duplasena",
//     "federal",
//     "diadesorte",
//     "supersete"
//   ]

// {
//   title: "FEDERAL",
//   name: "federal",
//   primaryColor: "#103099",
//   secondaryColor: "#8797CB",
//   totalNumbers: 82640,
//   startPoin: 1,
//   endPoint: 100,
//   channel: `${URI_CAIXA}/Federal.aspx,
// },
