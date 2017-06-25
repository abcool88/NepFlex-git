using Core.Interfaces;
using Core.Interfaces.Services;
using NepFlex.Core.Entities.ResourceModels;
using System.Collections.Generic;

namespace Core.Services
{
    public class MenuTopService : IMenuTopService
    {
        private IUnitOfWork _unitOfWork { get; set; }
        public MenuTopService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public List<MenuTopContainer> GetMenuTopItems(int id)
        {
            return _unitOfWork.MenuTopRepository.GetMenuTopItems(id);
        }
        public List<MenuTopNav> GetMenuNav()
        {
            return _unitOfWork.MenuTopRepository.GetMenuNav();
        }
    }
}
