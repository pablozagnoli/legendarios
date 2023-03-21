using System;

namespace legendarios_API.Models
{
    public class LegendariosParams
    {
        public DateTime? DATAINI { get; set; }
        public DateTime? DATAFIM { get; set; }
        public int? CODIGOLEGENDARIO { get; set; }
        public string NOMELEGENDARIO { get; set; }
        public int? CODOLEGENDARIO { get; set; }
        public int Id_Usuario { get; set; }
    }

    public class Autenticacao
    {
        public int Id_Usuario { get; set; }
    }

}
