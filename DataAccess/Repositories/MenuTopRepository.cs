using Core.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Entities.ResourceModels;
using NepFlex.DataAccess.Context;
using NepFlex.Core.Entities.OnlinePasal;

namespace DataAccess.Repositories
{
    public class MenuTopRepository : IMenuTopRepository
    {
        private readonly IOnlinePasalContext _context;
        public MenuTopRepository(IOnlinePasalContext context)
        {
            _context = context;
        }
        public List<MenuTopContainer>GetMenuTopItems()
        {
            var results = _context.MenuPopContainers;
            return  results.Select(a => new MenuTopContainer()
            {              
                MenuID = a.MenuId,
                MenuPopContainer = a.MenuPopContainer_,
                MenuPopUrl = a.MenuPopUrl,
                Active = a.Active,
                MultipleMenuID = a.MultipleMenuId,
                DateInserted = a.DateInserted
            }).ToList();
        }
    }
}

