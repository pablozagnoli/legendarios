namespace legendarios_API.DTO
{
    public class DadosPagamentoDTO
    {
        public int installments { get; set; }
        public string issuer_id { get; set; }
        public PayerDTO payer { get; set; }
        public string payment_method_id { get; set; }
        public string token { get; set; }
        public int transaction_amount { get; set; }

    }

    public class PayerDTO
    {
        public string email { get; set; }
        public identificationDTO identification { get; set; }

    }

    public class identificationDTO
    {
        public string number { get; set; }
        public string type { get; set; }

    }
}
