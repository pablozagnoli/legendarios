using MercadoPago.Client.Preference;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Preference;
using System.Collections.Generic;
using System.Threading.Tasks;
using MercadoPago.Client;
using MercadoPago.Resource.Payment;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;
using System.Net.Http.Headers;
using System.Net.Http;
using System.Text;
using System;
using legendarios_API.DTO;

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

        public static async Task<Payment> CriarPagamento(DadosPagamentoDTO dadosPagamento)
        {
            MercadoPagoConfig.AccessToken = "TEST-567620616417230-011715-47c8c45fa26caead6f15578546ddf02f-335241271";

            var request = new PaymentCreateRequest
            {
                TransactionAmount = dadosPagamento.transaction_amount,
                Token = dadosPagamento.token,
                Installments = dadosPagamento.installments,  //QUANTIDADE DE PARCELAS
                Payer = new PaymentPayerRequest
                {
                    Type = "customer",
                    Email = dadosPagamento.payer.email,
                    Identification = new MercadoPago.Client.Common.IdentificationRequest
                    {
                        Number = dadosPagamento.payer.identification.number,
                        Type = dadosPagamento.payer.identification.type
                    }
                },
            };

            var client = new PaymentClient();
            Payment payment = await client.CreateAsync(request);

            return payment;
        }

        public Payment GetInfoPayment(long id)
        {
            // var payment = Payment.FindById(id);
            return null;
        }

        public Payment RefundPayment(long id, decimal valueToRefund = 0)
        {
            //var payment = Payment.FindById(id);
            if (valueToRefund == 0)
            {
                //  payment.Refund();
            }
            else
            {
                //payment.Refund(valueToRefund);
            }

            return null;
        }

    }
}
