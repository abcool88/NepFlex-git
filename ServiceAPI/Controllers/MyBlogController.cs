using Core.Interfaces;
using NepFlex.Core.Entities.ResourceModels;
using NepFlex.Core.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Nepflex.ServiceAPI.Controllers
{
    [RoutePrefix("api/blog")]
    public class MyBlogController : ApiController
    {
        private IMyBlogService _blogService;
        private IUnitOfWork _unitOfWork { get; set; }
        public MyBlogController(IMyBlogService blogService)
        {
            _blogService = blogService;
        }

        [Route("getAll")]
        [HttpGet]
        public IHttpActionResult GetMyBlogData()
        {
            Console.WriteLine("came here in GetMyBlogData");
            try
            {
                var results = _blogService.GetMyBlogData();
                return Ok(results);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [Route("{id}")]
        [HttpGet]
        public IHttpActionResult GetMyBlogDetail(int id)
        {
            Console.WriteLine("came here in GetMyBlogDetail");
            try
            {
                var results = _blogService.GetMyBlogDetail(id);
                return Ok(results);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [Route("getComments/{id}")]
        [HttpGet]
        public IHttpActionResult GetComments(int id)
        {
            Console.WriteLine("came here in GetComments");
            try
            {
                var results = _blogService.GetComments(id);
                return Ok(results);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [Route("createBlog")]
        [HttpPost]
        public IHttpActionResult SaveMyBlogData([FromBody] MyBlogData blogData)
        {
            try
            {
                var result = _blogService.SaveMyBlogData(blogData);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [Route("postComment/{blogID}")]
        [HttpPost]
        public IHttpActionResult SaveComment(int blogID, [FromBody] BlogComments comment)
        {
            try
            {
                var result = _blogService.SaveComment(blogID, comment);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

    }
}
