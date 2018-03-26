using NepFlex.Core.Entities.ResourceModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.Core.Interfaces.Services
{
    public interface IMyBlogService
    {
        List<MyBlogData> GetMyBlogData();
        List<MyBlogData> GetMyBlogDetail(int id);
        List<BlogComments> GetComments(int blogId);
        int SaveMyBlogData(MyBlogData data);
        int SaveComment(int blogID, BlogComments comment);
    }
}
