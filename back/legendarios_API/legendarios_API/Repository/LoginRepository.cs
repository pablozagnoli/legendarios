using Dapper;
using legendarios_API.Entity;
using MySqlConnector;
using System.Collections.Generic;
using System;
using System.Linq;

namespace legendarios_API.Repository
{
    public class LoginRepository
    {
        static string _connectionString = "Server=89.117.32.251;port=33;Database=DBLEGENDARIOS;Uid=root;Pwd=97514815";
        MySqlConnection _conn = new MySqlConnection(_connectionString);

        public List<Usuarios> GetUsuarios()
        {
            try
            {
                var sql = "SELECT * FROM USUARIOS WHERE deletado = 0";

                var result = this._conn.Query<Usuarios>(sql).ToList();
                return result;
            }
            catch (Exception)
            {
                return new List<Usuarios>();
            }
        }

        public Usuarios GetUsuariosIdChave(string usuario, string senha)
        {
            try
            {
                var sql = $@"SELECT * FROM USUARIOS WHERE 
                                                            deletado = 0
                                                    AND     n_lgnd = {usuario} 
                                                    AND     chave = {senha}";

                var result = this._conn.Query<Usuarios>(sql).ToList().FirstOrDefault();
                return result;
            }
            catch (Exception)
            {
                return new Usuarios();
            }
        }

        public int AtualizaToken(string idUsuario)
        {
            try
            {
                var sql = $@"INSERT INTO `DBLEGENDARIOS`.`TOKENS`
                                                                 (`token`,
                                                                 `id_usuario`,
                                                                 `dt_acesso`,
                                                                 `deletado`)
                                                                 VALUES
                                                                 ('TOKENS-TESTE-{DateTime.Now}',
                                                                 {idUsuario},
                                                                 STR_TO_DATE('{DateTime.Now.ToString().Replace('/', '-')}', '%d-%m-%Y %H:%i:%s'),
                                                                 0)";

                var result = this._conn.Execute(sql);
                return result;
            }
            catch (Exception)
            {
                return 0;
            }
        }

        public List<Tokens> GetTokens(string usuario)
        {
            try
            {
                var sql = $@"SELECT * FROM TOKENS WHERE 
                                                            deletado = 0
                                                    AND     id_usuario = {usuario}";

                var result = this._conn.Query<Tokens>(sql).ToList();
                return result;
            }
            catch (Exception)
            {
                return new List<Tokens>();
            }
        }

    }
}
