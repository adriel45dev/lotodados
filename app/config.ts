type Jogos = {
  title: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  numeros: number;
}[];

const MODALIDADES_LOTERIA: Jogos = [
  {
    title: "+MILIONÁRIA",
    name: "maismilionaria",
    primaryColor: "#2e317a",
    secondaryColor: "#59629f",
    numeros: 50,
  },
  {
    title: "MEGA-SENA",
    name: "megasena",
    primaryColor: "#209869",
    secondaryColor: "#8fcbb3",
    numeros: 60,
  },
  {
    title: "LOTOFÁCIL",
    name: "lotofacil",
    primaryColor: "#930089",
    secondaryColor: "#C87fc3",
    numeros: 25,
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
