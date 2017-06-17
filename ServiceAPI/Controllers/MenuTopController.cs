using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Core.Interfaces.Services;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Nepflex.ServiceAPI.Controllers
{
    [RoutePrefix("api/menuTopContainer")]
    //[Authorize]
    public class MenuTopController : ApiController
    {
        private readonly IMenuTopService _menuTopService;
        public MenuTopController(IMenuTopService menuTopService)
        {
            _menuTopService = menuTopService;
        }

        [Route("")]
        [HttpGet]
        public IHttpActionResult Get()
        {
            try
            {
                var menuTopList = _menuTopService.GetMenuTopItems();
                    return Ok(menuTopList);
            }
            catch(Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
