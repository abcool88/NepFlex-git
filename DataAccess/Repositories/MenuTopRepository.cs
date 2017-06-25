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
        public List<MenuTopContainer> GetMenuTopItems(int id)
        {
            var results = _context.SpMenuContainer(id);
            return results.Select(a => new MenuTopContainer()
            {
                MenuPopID = a.MenuPopID,
                MenuPopContainer = a.MenuPopContainer,
                MenuPopUrl = a.MenuPopUrl,
                MenuStillActive = a.MenuStillActive,
                MenuContainerValidity = a.MenuContainerValidity,
                BrandID = a.BrandID,
                BrandName = a.BrandName,
                BrandUrl = a.BrandUrl,
                BrandStillActive = a.BrandStillActive,
                BrandRemarks = a.BrandRemarks,
                ClearenceID = a.ClearenceID,
                ClearenceUrl = a.ClearenceUrl,
                ClearenceCalidity = a.ClearenceCalidity,
                ClearenceRemarks = a.ClearenceRemarks,
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

