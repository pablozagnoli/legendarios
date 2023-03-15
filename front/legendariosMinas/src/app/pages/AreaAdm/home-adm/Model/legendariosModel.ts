export interface legendarios {
  ativo: boolean | undefined;
  cadastro_pessoa?: string;
  celular?: string;
  data_de_nascimento?: Date;
  deletado: boolean | undefined;
  e_batizado: boolean | undefined;
  e_lider_de_celula: boolean | undefined;
  email?: string;
  estado_civil?: string;
  frequanta_celula: boolean | undefined;
  id_legendario?: number;
  igreja?: string;
  n_lgnd?: number;
  nome?: string;
  profissao?: string;
  rec?: string;
  rede?: string;
  religiao?: string;
  tipo_sanguineo?: string;
}

export interface legendariosListDTO {
  data: legendarios[],
  sucesso: boolean,
  erro: string
}

export interface legendariosOneDTO {
  data: legendarios,
  sucesso: boolean,
  erro: string
}
