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
    [RoutePrefix("api/search")]
    //[Authorize]
    public class searchController : ApiController
    {
        public ISearchService _searchService;
        private IUnitOfWork _unitOfWork { get; set; }
        public searchController(ISearchService searchService)
        {
            _searchService = searchService;
        }

        [Route("{searchText}")]
        [HttpGet]
        public IHttpActionResult GetSearchResponseList([FromUri] string[] searchText)
        {
            Console.WriteLine("came here in search");
            try
            {
                var results = _searchService.GetSearchResponseList(searchText);
                return Ok(results);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
