using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using System.Security.Permissions;
using MySqlConnector;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.Data.Common;
using legendarios_API.DTO;
using System.Threading.Tasks;
using legendarios_API.Interfaces;

namespace legendarios_API.Repository
{
    public class LegendariosRepository : ILegendariosRepository
    {

        static string _connectionString = "Server=173.224.117.181;port=33;Database=DBLEGENDARIOS;Uid=root;Pwd=97514815";
        MySqlConnection _conn = new MySqlConnection(_connectionString);


        public IEnumerable<LegendariosDTO> GetDept()
        {
            var sql = "SELECT DeptNo,DName,Location FROM Dept";
            var result = this._conn.Query<LegendariosDTO>(sql).ToList();
            return result;
        }

        public LegendariosDTO GetDeptByDeptNo(int deptNo)
        {
            var sql = "SELECT DeptNo,DName,Location FROM Dept WHERE DeptNo = @DeptNo";
            var result = this._conn.Query<LegendariosDTO>(sql, new { DeptNo = deptNo }).FirstOrDefault();
            return result;
        }

        public async Task<IEnumerable<LegendariosDTO>> GetAllLegendarios()
        {
            var sql = "SELECT * FROM legendarios";

            var result = await this._conn.QueryAsync<LegendariosDTO>(sql);

            return result;
        }
    }
}
