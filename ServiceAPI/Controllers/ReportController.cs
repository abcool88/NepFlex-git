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
    [RoutePrefix("api/report")]
    public class ReportController : ApiController
    {
        private IReportService _reportService;
        private IUnitOfWork _unitOfWork { get; set; }
        public ReportController(IReportService reportService)
        {
            _reportService = reportService;
        }

        [Route("")]
        [HttpGet]
        public IHttpActionResult GetReportedData()
        {
            Console.WriteLine("came here in GetMenuNav");
            try
            {
                var results = _reportService.getReportedData();
                return Ok(results);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }

}
