using AutoMapper;
using legendarios_API.DTO;
using legendarios_API.Interfaces;
using legendarios_API.Repository;
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

        [HttpGet("trazer")]
        public async Task<IActionResult> GetLegendarios()
        {
            var result = await _repositorio.GetAllLegendarios();

            return Ok(result);
        }
    }
}
