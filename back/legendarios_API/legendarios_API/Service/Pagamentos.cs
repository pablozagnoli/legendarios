using MercadoPago.Client.Preference;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Preference;
using System.Collections.Generic;
using System.Threading.Tasks;
using MercadoPago.Client;
using MercadoPago.Resource.Payment;

namespace legendarios_API.Service
{
    public class PagamentosServices
    {
        public static async Task<Preference> MercadoPagoPagamentosAsync()
        {
            //MercadoPagoConfig.AccessToken = "TEST-567620616417230-011715-47c8c45fa26caead6f15578546ddf02f-335241271";

            MercadoPagoConfig.AccessToken = "APP_USR-567620616417230-011715-ba6557ff016e169897b186c8503bfcf9-335241271";

            var request = new PreferenceRequest
            {
                Items = new List<PreferenceItemRequest>{ 
                                                            new PreferenceItemRequest {
                                                                                        Title = "Meu produto",
                                                                                        Quantity = 1,
                                                                                        CurrencyId = "BRL",
                                                                                        UnitPrice = 750.99m,
                                                                                       },
                                                      },
            };                                                  

            // Cria a preferência usando o client
            var client = new PreferenceClient();
            Preference preference = await client.CreateAsync(request);


            return preference;
        }

        public static async Task<Payment> MercadoPagoGetInfosPagamentos()
        {
            //MercadoPagoConfig.AccessToken = "TEST-567620616417230-011715-47c8c45fa26caead6f15578546ddf02f-335241271";

            MercadoPagoConfig.AccessToken = "APP_USR-567620616417230-011715-ba6557ff016e169897b186c8503bfcf9-335241271";

            int IdPagamento = 335241271;

            // Cria a preferência usando o client
            var client = new PaymentClient();
            var payment = client.Capture(IdPagamento);


            return payment;
        }

    }
}
