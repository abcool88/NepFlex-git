using Core.Interfaces.Repositories;
using NepFlex.Core.Entities.ResourceModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.Core.Interfaces.Repositories
{
    public interface IMyBlogRepository : IRepository<String, int>
    {
        List<MyBlogData> GetMyBlogData();
        int SaveMyBlogData(MyBlogData data);
    }
}
