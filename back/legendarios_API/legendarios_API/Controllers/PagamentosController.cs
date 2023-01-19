using legendarios_API.DTO;
using legendarios_API.Repository;
using legendarios_API.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace legendarios_API.Controllers
{
    [ApiController]
    [Route("pagamentos")]
    public class PagamentosController : ControllerBase
    {

        private readonly ILogger<LegendariosController> _logger;
        private LegendariosRepository _repositorio = new LegendariosRepository();

        [HttpGet("url-compra")]
        public async Task<IActionResult> urlCompra(string idlegendario)
        {
            var result = await PagamentosServices.MercadoPagoPagamentosAsync();


            return Ok(result.SandboxInitPoint);
        }

        [HttpGet("notificacoes-de-compra")]
        public async Task<IActionResult> notificacoesDeCompra(string idlegendario)
        {
            var result = await _repositorio.GetLegendarioById(idlegendario);

            return Ok(result);
        }

        [HttpPost("criar-pagameto")]
        public async Task<IActionResult> verificarPagamento([FromBody] DadosPagamentoDTO DadosPagamento)
        {
            var result = await PagamentosServices.CriarPagamento(DadosPagamento);

            return Ok(result);
        }
    }
}
