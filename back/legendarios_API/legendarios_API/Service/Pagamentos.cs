using MercadoPago.Client.Preference;
using MercadoPago.Config;
using MercadoPago.Resource.Preference;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace legendarios_API.Service
{
    public class PagamentosServices
    {
        public static async Task<Preference> MercadoPagoPagamentosAsync()
        {
            MercadoPagoConfig.AccessToken = "TEST-567620616417230-011715-47c8c45fa26caead6f15578546ddf02f-335241271";

            var request = new PreferenceRequest
            {
                Items = new List<PreferenceItemRequest>{ 
                                                            new PreferenceItemRequest {
                                                                                        Title = "Meu produto",
                                                                                        Quantity = 1,
                                                                                        CurrencyId = "BRL",
                                                                                        UnitPrice = 75.56m,
                                                                                       },
                                                      },
            };                                                  

            // Cria a preferência usando o client
            var client = new PreferenceClient();
            Preference preference = await client.CreateAsync(request);

            return preference;
        }

    }
}
