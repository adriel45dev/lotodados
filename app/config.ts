import TModalidade from "./shared/types/modalidade.types";

const MODALIDADES_LOTERIA: TModalidade[] = [
  {
    title: "+MILIONÁRIA",
    name: "maismilionaria",
    primaryColor: "#2e317a",
    secondaryColor: "#59629f",
    numeros: 51, // 0 - 50
  },
  {
    title: "MEGA-SENA",
    name: "megasena",
    primaryColor: "#209869",
    secondaryColor: "#8fcbb3",
    numeros: 61, // 0 -- 60
  },
  {
    title: "LOTOFÁCIL",
    name: "lotofacil",
    primaryColor: "#930089",
    secondaryColor: "#C87fc3",
    numeros: 26, // 0 - 25
  },
  {
    title: "LOTOMANIA",
    name: "lotomania",
    primaryColor: "#F78100",
    secondaryColor: "#FABF7F",
    numeros: 100, // 0 - 99
  },
];

export { MODALIDADES_LOTERIA };

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
