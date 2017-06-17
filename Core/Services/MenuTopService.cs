using Core.Entities.ResourceModels;
using Core.Interfaces;
using Core.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Services
{
    public class MenuTopService : IMenuTopService
    {
        private IUnitOfWork _unitOfWork { get; set; }
        public MenuTopService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public List<MenuTopContainer> GetMenuTopItems()
        {
            return _unitOfWork.MenuTopRepository.GetMenuTopItems();
        }
    }
}
