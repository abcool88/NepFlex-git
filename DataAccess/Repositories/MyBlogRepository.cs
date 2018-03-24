using DataAccess.Repositories;
using NepFlex.Core.Entities.ResourceModels;
using NepFlex.Core.Interfaces.Repositories;
using NepFlex.DataAccess.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.DataAccess.Repositories
{
    public class MyBlogRepository : Repository<string, int>, IMyBlogRepository
    {
        private readonly ICooperVisionContext _context;
        public MyBlogRepository(ICooperVisionContext context) : base(context)
        {
            _context = context;
        }
        public List<MyBlogData> GetMyBlogData()
        {
            var db = _context.MyBlogS();
            var resultList = db.Select(a => new MyBlogData
            {
                BlogID=a.BlogID,
                Title = a.Title,
                Detail = a.Detail,
                Created_On=a.Created_On
            }).ToList();

            return resultList;
        }
        public int SaveMyBlogData(MyBlogData data)
        {
            var result = _context.MyBlogI(data.Title, data.Detail);
            return result;
        }
    }
}
