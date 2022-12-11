﻿using System;

namespace legendarios_API.DTO
{
    public class LegendariosDTO
    {
        /// <summary>
        /// id do legendário sequencial
        /// </summary>
        public int id_legendario { get; set; }
        
        /// <summary>
        /// numero de legendário
        /// </summary>
        public string n_lgnd { get; set; }
        
        /// <summary>
        /// nome do legendario
        /// </summary>
        public string nome { get; set; }
        
        /// <summary>
        /// rec que participou
        /// </summary>
        public string rec { get; set; }

        /// <summary>
        /// email do legendario
        /// </summary>
        public string email { get; set; }

        /// <summary>
        /// celular do legendario
        /// </summary>
        public string celular { get; set; }

        /// <summary>
        /// numero de inscricao CPF se fr Brasileiro
        /// se for estrangeiro o numero é o do pais
        /// </summary>
        public string cadastro_pessoa { get; set; }

        /// <summary>
        /// data de nascimento do legendario
        /// </summary>
        public DateTime data_de_nascimento { get; set; }

        /// <summary>
        /// estado civil do legendario
        /// </summary>
        public string estado_civil { get; set; }

        /// <summary>
        /// profissao do legendario
        /// </summary>
        public string profissao { get; set; }

        /// <summary>
        /// tipo sanguineo do legendario
        /// </summary>
        public string tipo_sanguineo { get; set; }

        /// <summary>
        /// religiao do legendario
        /// </summary>
        public string religiao { get; set; }

        /// <summary>
        /// igreja que o legendario frequenta
        /// </summary>
        public string igreja { get; set; }

        /// <summary>
        /// indica se o legendario e batizado
        /// </summary>
        public bool e_batizado { get; set; }

        /// <summary>
        /// indicar se o legendario frequenta celula
        /// </summary>
        public bool frequanta_celula { get; set; }

        /// <summary>
        /// qual rede o legendario faz parte Exemplo: WAKE, DINAMOS 
        /// </summary>
        public string rede { get; set; }

        /// <summary>
        /// indica se o legendario e lidar de celula
        /// </summary>
        public bool e_lider_de_celula { get; set; }

        /// <summary>
        /// indicar se o cadastro do legendario está ativo
        /// </summary>
        public bool ativo { get; set; }

        /// <summary>
        /// indica se o cadastro do legendario foi excluido
        /// </summary>
        public bool deletado { get; set; }

    }
}
