using legendarios_API.DTO;
using legendarios_API.Entity;
using legendarios_API.Repository;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;

namespace legendarios_API.Service
{
    public class LoginService
    {
        LoginRepository loginRepository = new LoginRepository();

        public Tokens RealizarLoguin(LoginDTO parans)
        {
            var usuario = loginRepository.GetUsuariosIdChave(parans.login, parans.password);

            var tokenAtualizado = loginRepository.AtualizaToken(usuario.id_usuario.ToString());

            var tokens = loginRepository.GetTokens(usuario.id_usuario.ToString());

            var token = tokens.OrderByDescending(obj => obj.dt_acesso).FirstOrDefault();

            return token;
        }

        public bool VerificaSeEstaLogado(string id_usuario)
        {

            var tokens = loginRepository.GetTokens(id_usuario);

            var token = tokens.OrderByDescending(obj => obj.dt_acesso).FirstOrDefault();

            if (token == null)
            {
                return false;
            }

            DateTime dataAtual = DateTime.Now;
            DateTime dataAcesso = token.dt_acesso;

            TimeSpan diferenca = dataAcesso - dataAtual;

            if (diferenca >= TimeSpan.FromMinutes(15))
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }
}
