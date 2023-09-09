type TPremio = {
  descricao: string;
  faixa: number;
  ganhadores: number;
  valorPremio: number;
};

type TLocalGanhador = {
  ganhadores: number;
  municipio: string;
  nomeFatansiaUL: string;
  serie: string;
  posicao: number;
  uf: string;
};

type TLoteria = {
  loteria: string;
  concurso: number;
  data: string;
  local: string;
  dezenasOrdemSorteio: string[];
  dezenas: string[];
  trevos: string[];
  timeCoracao: string;
  mesSorte: string;
  premiacoes: TPremio[];
  estadosPremiados: string[];
  observacao: string;
  acumulou: boolean;
  proximoConcurso: number;
  dataProximoConcurso: string;
  localGanhadores: TLocalGanhador[];
  valorArrecadado: number;
  valorAcumuladoConcurso_0_5: number;
  valorAcumuladoConcursoEspecial: number;
  valorAcumuladoProximoConcurso: number;
  valorEstimadoProximoConcurso: number;
};

export default TLoteria;
