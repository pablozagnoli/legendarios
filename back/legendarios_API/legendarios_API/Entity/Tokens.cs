using System;

namespace legendarios_API.Entity
{
    public class Tokens
    {
        public int id_tokens { get; set; }
        public string token { get; set; }
        public int id_usuario { get; set; }
        public DateTime dt_acesso { get; set; }
        public int deletado { get; set; }
    }
}
