using Core.Entities.ResourceModels;
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Interfaces.Repositories;
using NepFlex.Core.Entities.OnlinePasal;

namespace Core.Interfaces.Repositories
{
   // public interface IMenuTopRepository:IRepository<MenuPopId, int>
    public interface IMenuTopRepository:IRepository<MenuTopContainer, int>
    {
        List<MenuTopContainer> GetMenuTopItems();
    }
}
