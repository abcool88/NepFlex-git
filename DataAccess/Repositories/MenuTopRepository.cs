using Core.Interfaces.Repositories;
using System.Collections.Generic;
using System.Linq;
using NepFlex.DataAccess.Context;
using NepFlex.Core.Entities.ResourceModels;
using NepFlex.Core.Entities.OnlinePasal;

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
            var results = _context.SpMenuContainer();
            return results.Select(a => new MenuTopContainer()
            {
                MenuID = a.MenuID,
                MenuPopID = a.MenuPopID,
                MenuName = a.MenuName,
                MenuUrl = a.MenuUrl,
                MenuPopContainer = a.MenuPopContainer,
                MenuPopUrl = a.MenuPopUrl,
                MenuStillActive = a.MenuStillActive,
                MenuContainerValidity = a.MenuContainerValidity,
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
        public List<ClothingBrands> GetClothingBrands()
        {
            var resultClothingBrand = _context.ClothingBrands;
            return resultClothingBrand.Select(x => new ClothingBrands()
            {
                BrandId = x.BrandId,
                MenuId = x.MenuId,
                BrandName = x.BrandName,
                BrandUrl = x.BrandUrl,
                Active = x.Active,
                DateInserted = x.DateInserted
            }).ToList();
        }
    }
}

