using legendarios_API.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace legendarios_API.Interfaces
{
    public interface ILegendariosRepository
    {
        IEnumerable<LegendariosDTO> GetDept();
        LegendariosDTO GetDeptByDeptNo(int deptNo);
        Task<IEnumerable<LegendariosDTO>> GetAllLegendarios();
    }
}
