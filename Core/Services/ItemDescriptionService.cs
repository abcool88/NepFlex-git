using Core.Interfaces;
using NepFlex.Core.Entities.ResourceModels;
using NepFlex.Core.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.Core.Services
{
    public class ItemDescriptionService: IItemDescriptionService
    {
        private IUnitOfWork _unitOfWork { get; set; }
        public ItemDescriptionService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public List<ItemDescription> GetItemDescriptionList()
        {
            return _unitOfWork.ItemDescriptionRepository.GetItemDescriptionList();
        }
    }
}
