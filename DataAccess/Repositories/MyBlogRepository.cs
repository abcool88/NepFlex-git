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
                BlogID = a.BlogID,
                Title = a.Title,
                Detail = a.Detail,
                Created_On = a.Created_On
            }).ToList();

            return resultList;
        }

        public List<MyBlogData> GetMyBlogDetail(int id)
        {
            var db = _context.MyBlogs;
            var result = db.Where(a => a.BlogId == id).Select(x => new MyBlogData
            {
                BlogID = x.BlogId,
                Title = x.Title,
                Detail = x.Detail,
                Created_On = x.CreatedOn
            }).ToList();
            return result;
        }

        public List<BlogComments> GetComments(int blogId)
        {
            var getComments = _context.MyBlogCommentsS(blogId);
            var result = getComments.Select(b => new BlogComments
            {
                Comment=b.Comment,
                Created_On=b.Created_On
            }).ToList();
            return result;
        }

        public int SaveMyBlogData(MyBlogData data)
        {
            var result = _context.MyBlogI(data.Title, data.Detail);
            return result;
        }
        public int SaveComment(int blogID, BlogComments comment)
        {
            var result = _context.MyBlogCommentsI(blogID,comment.Comment);
            return result;
        }
    }
}
