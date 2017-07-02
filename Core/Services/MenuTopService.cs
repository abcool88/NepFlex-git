using Core.Interfaces;
using Core.Interfaces.Services;
using NepFlex.Core.Entities.OnlinePasal;
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
        public List<MenuTopContainer> GetMenuTopItems()
        {
            return _unitOfWork.MenuTopRepository.GetMenuTopItems();
        }
        public List<MenuTopNav> GetMenuNav()
        {
            return _unitOfWork.MenuTopRepository.GetMenuNav();
        }

        public List<ClothingBrands> GetClothingBrands()
        {
            return _unitOfWork.MenuTopRepository.GetClothingBrands();
        }
        public List<MenuClearence> GetMenuClearence()
        {
            return _unitOfWork.MenuTopRepository.GetMenuClearence();
        }
        public List<Fashion> GetFashion()
        {
            return _unitOfWork.MenuTopRepository.GetFashion();
        }
        public List<NewArrival> GetNewArrival()
        {
            return _unitOfWork.MenuTopRepository.GetNewArrival();
        }
    }
}
