using legendarios_API.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace legendarios_API.Controllers
{
    [ApiController]
    [Route("legendarios")]
    public class WeatherForecastController : ControllerBase
    {

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet("trazer")]
        public IEnumerable<LegendariosDTO> GetLegendarios()
        {
            var result = new List<LegendariosDTO>();

            int coount = 1;
            
            while (coount < 20)
            {
                coount++;
            result.Add(new LegendariosDTO
            {
                id_legendario = coount + 2,
                n_lgnd = coount,
                nome = "Estou testando",
                rec = "8554",
                email = "ts@testes.com",
                celular = "31 885544556622",
                cadastro_pessoa = "11222334455667788",
                data_de_nascimento = DateTime.Today,
                estado_civil = "solteiro",
                profissao = "Enge",
                tipo_sanguineo = "AB",
                religiao = "Cristão",
                igreja = "Central",
                e_batizado = true,
                frequanta_celula = true,
                rede = "wake",
                e_lider_de_celula = false,
                ativo = true,
                deletado = false
            });
            }


            return result;
        }
    }
}
