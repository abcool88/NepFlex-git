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
    [RoutePrefix("api/MyBlog")]
    public class MyBlogController : ApiController
    {
        private IMyBlogService _blogService;
        private IUnitOfWork _unitOfWork { get; set; }
        public MyBlogController(IMyBlogService blogService)
        {
            _blogService = blogService;
        }

        [Route("blogDetail")]
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
        [Route("post")]
        [HttpPost]
        public IHttpActionResult SaveReport(MyBlogData reportData)
        {
            try
            {
                var result = _blogService.SaveMyBlogData(reportData);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

    }
}
