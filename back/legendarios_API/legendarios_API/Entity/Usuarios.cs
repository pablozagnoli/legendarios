using Microsoft.VisualBasic;
using System;

namespace legendarios_API.Entity
{
    public class Usuarios
    {
        public int id_usuario { get; set; }
        public string chave { get; set; }
        public string n_lgnd { get; set; }
        public int nivel_permissao { get; set; }
        public DateTime MyProperty { get; set; }
        public string id_usuario_criacao { get; set; }
        public DateTime data_edicao { get; set; }
        public string id_usuario_edicao { get; set; }
        public DateTime data_delecao { get; set; }
        public string id_usuario_delecao { get; set; }
        public int deletado { get; set; }
    }
}
