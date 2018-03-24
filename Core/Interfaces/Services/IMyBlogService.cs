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
        int SaveMyBlogData(MyBlogData data);
    }
}
