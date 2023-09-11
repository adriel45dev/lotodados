import TModalidade from "./shared/types/modalidade.types";

const MODALIDADES_LOTERIA: TModalidade[] = [
  {
    title: "+MILIONÁRIA",
    name: "maismilionaria",
    primaryColor: "#2e317a",
    secondaryColor: "#59629f",
    totalNumbers: 51,
    startPoin: 1,
    endPoint: 50,
  },
  {
    title: "MEGA-SENA",
    name: "megasena",
    primaryColor: "#209869",
    secondaryColor: "#8fcbb3",
    totalNumbers: 61,
    startPoin: 1,
    endPoint: 60,
  },
  {
    title: "LOTOFÁCIL",
    name: "lotofacil",
    primaryColor: "#930089",
    secondaryColor: "#C87fc3",
    totalNumbers: 26,
    startPoin: 1,
    endPoint: 25,
  },
  {
    title: "LOTOMANIA",
    name: "lotomania",
    primaryColor: "#F78100",
    secondaryColor: "#FABF7F",
    totalNumbers: 100,
    startPoin: 0,
    endPoint: 99,
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
