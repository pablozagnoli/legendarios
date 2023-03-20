using legendarios_API.DTO;
using legendarios_API.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Text;

namespace legendarios_API.Controllers
{
    [ApiController]
    [Route("login")]
    public class LoginController : ControllerBase
    {


        private readonly ILogger<LegendariosController> _logger;
        private LoginService _LoginService = new LoginService();

        public LoginController(ILogger<LegendariosController> logger)
        {
            _logger = logger;
        }

        [HttpPost("/adm-login")]
        public IActionResult Login([FromBody] LoginDTO parans)
        {

            string decryptedString = Encoding.UTF8.GetString(Convert.FromBase64String(parans.password));

            parans.password = decryptedString;

            var result = _LoginService.RealizarLoguin(parans);

            return Ok(result);
        }
    }
}
