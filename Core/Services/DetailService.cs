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
    public class DetailService : IDetailService
    {
        public IUnitOfWork _unitOfWork { get; set; }
        public DetailService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public async Task<List<DetailResponse>> GetDetailOfIndividualItem(int id)
        {
            return await _unitOfWork.DetailRepository.GetDetailOfIndividualItem(id);
        }
    }
}
