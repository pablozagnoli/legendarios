using AutoMapper;
using legendarios_API.DTO;
using legendarios_API.Interfaces;
using legendarios_API.Repository;
using legendarios_API.Service;
using Microsoft.AspNetCore.Cors;
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
    public class LegendariosController : ControllerBase
    {

        private readonly ILogger<LegendariosController> _logger;
        private LegendariosRepository _repositorio = new LegendariosRepository();

        public LegendariosController(ILogger<LegendariosController> logger)
        {
            _logger = logger;
        }

        [HttpPost("trazer")]
        public async Task<IActionResult> GetLegendarios([FromBody] LegendariosParams param)
        {
            var result = await _repositorio.GetAllLegendarios(param);

            return Ok(result);
        }

        [HttpGet("trazer/{idlegendario}")]
        public async Task<IActionResult> GetLegendarioById(string idlegendario)
        {
            var result = await _repositorio.GetLegendarioById(idlegendario);

            return Ok(result);
        }

        [HttpGet("url-compra")]
        public async Task<IActionResult> urlCompra(string idlegendario)
        {
            var result = await PagamentosServices.MercadoPagoPagamentosAsync();

            var resultpayment = await PagamentosServices.MercadoPagoGetInfosPagamentos();

            return Ok(result.SandboxInitPoint);
        }

        [HttpGet("notificacoes-de-compra")]
        public async Task<IActionResult> notificacoesDeCompra(string idlegendario)
        {
            var result = await _repositorio.GetLegendarioById(idlegendario);

            return Ok(result);
        }

        [HttpGet("verficar-pagameto")]
        public async Task<IActionResult> verificarPagamento(string idlegendario)
        {
            var result = await _repositorio.GetLegendarioById(idlegendario);

            return Ok(result);
        }
    }
}
