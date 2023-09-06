type Jogos = {
  title: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
}[];

const MODALIDADES_LOTERIA: Jogos = [
  {
    title: "+MILIONÁRIA",
    name: "maismilionaria",
    primaryColor: "#2E317A",
    secondaryColor: "#59629F",
  },
  {
    title: "MEGA-SENA",
    name: "megasena",
    primaryColor: "#209869",
    secondaryColor: "#8FCBB3",
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
