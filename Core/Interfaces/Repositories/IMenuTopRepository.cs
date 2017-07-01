using System.Collections.Generic;
using NepFlex.Core.Entities.ResourceModels;

namespace Core.Interfaces.Repositories
{
   // public interface IMenuTopRepository:IRepository<MenuPopId, int>
    public interface IMenuTopRepository:IRepository<MenuTopContainer, int>
    {
        List<MenuTopContainer> GetMenuTopItems();
        List<MenuTopNav> GetMenuNav();
    }
}
