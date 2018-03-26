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
        public List<MyBlogData> GetMyBlogDetail(int id)
        {
            return _unitOfWork.MyBlogRepository.GetMyBlogDetail(id);
        }
        public List<BlogComments> GetComments(int blogId)
        {
            return _unitOfWork.MyBlogRepository.GetComments(blogId);
        }

        public int SaveMyBlogData(MyBlogData data)
        {
            return _unitOfWork.MyBlogRepository.SaveMyBlogData(data);
        }
        public int SaveComment(int blogID, BlogComments comment)
        {
            return _unitOfWork.MyBlogRepository.SaveComment(blogID,comment);
        }
    }
}
