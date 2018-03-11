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
    [RoutePrefix("api/sendEmail")]
    public class SendEmailController : ApiController
    {
        private ISendEmailService _sendEmailService;
        private IUnitOfWork _unitOfWork { get; set; }
        public SendEmailController(ISendEmailService sendEmailService)
        {
            _sendEmailService = sendEmailService;
        }
        [Route("")]
        [HttpPost]
        public IHttpActionResult SendEmail(SendEmailRequest email)
        {
            try
            {
                var result = _sendEmailService.SendEmail(email);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex); ;
            }
        }
    }
}
