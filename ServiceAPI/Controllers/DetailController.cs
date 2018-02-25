using Core.Interfaces;
using NepFlex.Core.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Nepflex.ServiceAPI.Controllers
{
    [RoutePrefix("api/detail")]
    public class DetailController : ApiController
    {
        private IDetailService _detailService;
        private IUnitOfWork _unitOfWork { get; set; }
        public DetailController(IDetailService detailService)
        {
            _detailService = detailService;
        }

        [Route("{id}")]
        [HttpGet]
        public IHttpActionResult GetDetail(int id)
        {
            Console.WriteLine("came here to get detail");
            try
            {
                var result = _detailService.GetDetailOfIndividualItem(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
