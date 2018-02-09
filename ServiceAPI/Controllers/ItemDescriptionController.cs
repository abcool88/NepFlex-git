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
    [RoutePrefix("api/itemDescription")]
    public class ItemDescriptionController : ApiController
    {
        private IItemDescriptionService _itemDescriptions;
        private IUnitOfWork _unitOfWork { get; set; }
        public ItemDescriptionController(IItemDescriptionService itemDescriptions)
        {
            _itemDescriptions = itemDescriptions;
        }

        [Route("")]
        [HttpGet]
        public IHttpActionResult GetItemDescription()
        {
            try
            {
                var results = _itemDescriptions.GetItemDescriptionList();
                return Ok(results);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
