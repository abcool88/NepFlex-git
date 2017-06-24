using Core.Interfaces.Repositories;
using System.Collections.Generic;
using System.Linq;
using NepFlex.DataAccess.Context;
using NepFlex.Core.Entities.ResourceModels;

namespace DataAccess.Repositories
{
    public class MenuTopRepository : Repository<MenuTopContainer, int>, IMenuTopRepository
    {
        private readonly IOnlinePasalContext _context;
        public MenuTopRepository(IOnlinePasalContext context) : base(context)
        {
            _context = context;
        }
        public List<MenuTopContainer> GetMenuTopItems()
        {
            var results = _context.MenuPopContainers;
            return results.Select(a => new MenuTopContainer()
            {
                MenuID = a.MenuId,
                MenuPopContainer = a.MenuPopContainer_,
                MenuPopUrl = a.MenuPopUrl,
                Active = a.Active,
                MultipleMenuID = a.MultipleMenuId,
                DateInserted = a.DateInserted
            }).ToList();
        }

        public List<MenuTopNav> GetMenuNav()
        {
            var resultNav = _context.MenuNavigations;
            return resultNav.Select(x => new MenuTopNav()
            {
                MenuId = x.MenuId,
                MenuName = x.MenuName,
                MenuUrl = x.MenuUrl,
                Active = x.Active
            }).ToList();
        }
    }
}

