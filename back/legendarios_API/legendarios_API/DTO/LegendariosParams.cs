using System;

namespace legendarios_API.DTO
{
    public class LegendariosParams
    {
        public pagination? PAGINATION { get; set; }
        public DateTime? DATAINI { get; set; }
        public DateTime? DATAFIM { get; set; }
        public int? CODIGOLEGENDARIO { get; set; }
        public string? NOMELEGENDARIO { get; set; }
        public int? CODOLEGENDARIO { get; set; }
    }

    public class pagination
    {
        public int? PAGINAATUAL { get; set; }
        public int? ULTIMAPAGINA { get; set; }
        public int? QUANTIDADEPORPAGINA { get; set; }
    }
}
