import { Validators } from "@angular/forms";

export const FIRST_STEP_FORM = {
  nomecompleto: ["", [Validators.required]],
  email: ["", [Validators.required]],
  cpf: ["", [Validators.required]],
  rg: ["", [Validators.required]],
  dataespedicaorg: ["", [Validators.required]],
  rgespedidopor: ["", [Validators.required]],
  datanascimento: ["",[Validators.required]],
  idade: ["", [Validators.required]],
  celular: ["", [Validators.required]],
  nacionalidade: ["", [Validators.required]],
  address: ["", [Validators.required]],
  country: ["", [Validators.required]],
  state: ["",[Validators.required]],
  cidade: ["", [Validators.required]],
  cep: ["", [Validators.required]],
  profissao: ["", [Validators.required]],
  religiao: ["", [Validators.required]],
  civilstate: ["", [Validators.required]],
  temfilhos: ["", [Validators.required]],
  usamedicacao: ["", [Validators.required]],
  igreja: ["", [Validators.required]],
  qualredepertence: ["", [Validators.required]],
  numdacamisa: ["", [Validators.required]],
  conveniomedico: ["", [Validators.required]],
  frequentacelula: ["", [Validators.required]],
  liderdecelula: ["",[Validators.required]],
  nomecontatoemergencia1: ["", [Validators.required]],
  numerocontatoemergencia1: ["", [Validators.required]],
  nomecontatoemergencia2: ["", [Validators.required]],
  numerocontatoemergencia2: ["", [Validators.required]],
  medicofamilia: ["", [Validators.required]],
  telmedicofamilia: ["", [Validators.required]],
  nomeconveniomedico: ["", [Validators.required]],
  possuisegurodevida: ["", [Validators.required]],
  empresasegurodevida: ["", [Validators.required]],
  numeroopolicesegurodevida: ["", [Validators.required]],
  tiposanguineo: ["", [Validators.required]],
  possuiasdoencasabaixo: ["", [Validators.required]],
  semarcoupossuiasdoencasabaixo: ["", [Validators.required]],
  temoutroproblemasaude: ["", [Validators.required]],
  usamedicamentoqual: ["", [Validators.required]],
  porrazoesmedicasdietaespecial: ["", [Validators.required]],
  termoizencaorespmedica: ["", [Validators.required]],
  termoizencaorespmedicaradio: ["", [Validators.required]],
  politicacancelamento: ["", [Validators.required]],
  politicacancelamentoradio: ["", [Validators.required]],
  declaracaoinfoverdadeiras: ["", [Validators.required]],
  declaracaoinfoverdadeirasradio: ["", [Validators.required]],
};

export const SECOND_STEP_FORM = {
  numorca: [""],
  dtorca: [""],
  codusur1: [""],
  codfilial: [""],
  numorcfilial: [""],
  codigo: [""],
  cliente: [""],
  cnpj: [""],
  ie: [""],
  ufdestino: [""],
  codepto: [""],
  codprod: [""],
  descricao: [""],
  descricaoDepto: [""],
  codfab: [""],
  embalagem: [""],
  codprodcli: [""],
  selestoque: ["0"],
  numregiao: [""],
  percdesc: [""],
  numseq: [""],
};

export const THIRD_STEP_FORM = {
  codfilial: [""],
  numorcfilial: [""],
  tpvenda: [""],
  numorcfilialcompl: [""],
  numpedcli: [""],
  regiao: [""],
  numnota: [""],
  fase: [""],
  situacao: [""],
  statusautorizacao: [""],
  status: [""],
  numped: [""],
  dtorca: [""],
  numorca: [""],
  codigo: [""],
  cliente: [""],
  cnpj: [""],
  ie: [""],
  nomecontato: [""],
  obs1cab: [""],
  obs2: [""],
  ufdestino: [""],
  endereco: [""],
  numero: [""],
  complemento: [""],
  bairro: [""],
  cidade: [""],
  uf: [""],
  cep: [""],
  contato: [""],
  enderecoentrega: [""],
  numeroentrega: [""],
  complementoentrega: [""],
  bairroentrega: [""],
  cidadeentrega: [""],
  ufentrega: [""],
  cepentrega: [""],
  contatoentrega: [""],
  qtdevolumes: [""],
  especievolumes: [""],
  marca: [""],
  pesobruto: [""],
  pesoliquido: [""],
  vlrfrete: [null],
  observacao: [""],
  obsorc: [""],
  obsentrega1: [""],
  obsentrega2: [""],
  obsprevisaosaida: [
    {
      value: "",
      disabled: true,
    },
  ],
  obsavulsa: [
    {
      value: "",
      disabled: true,
    },
  ],
};

export const PAGAMENTO_FORM = {
  numcartao: ["", [Validators.required]],
  anovencimentocartao: ["", [Validators.required]],
  mesvencimentocartao: ["", [Validators.required]],
  codsegurancacartao: ["", [Validators.required]],
  nometitularcartao: ["", [Validators.required]],
  doctitularcartao: ["", [Validators.required]],
  nomesenderista: ["", [Validators.required]],
  emailsenderista: ["", [Validators.required]],
  cpfsenderista: ["", [Validators.required]],
  datanascimentosenderista: ["", [Validators.required]],
}
