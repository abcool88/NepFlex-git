using Core.Entities.ResourceModels;
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Interfaces.Repositories;

namespace Core.Interfaces.Repositories
{
   // public interface IMenuTopRepository:IRepository<MenuPopId, int>
    public interface IMenuTopRepository
    {
        List<MenuTopContainer> GetMenuTopItems();
    }
}
