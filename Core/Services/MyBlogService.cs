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
    public class MyBlogService : IMyBlogService
    {
        private IUnitOfWork _unitOfWork { get; set; }
        public MyBlogService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public List<MyBlogData> GetMyBlogData()
        {
            return _unitOfWork.MyBlogRepository.GetMyBlogData();
        }
        public int SaveMyBlogData(MyBlogData data)
        {
            return _unitOfWork.MyBlogRepository.SaveMyBlogData(data);
        }
    }
}
