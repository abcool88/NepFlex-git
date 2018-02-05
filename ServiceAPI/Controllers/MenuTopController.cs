using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Core.Interfaces.Services;
using System.Threading.Tasks;
using System.Diagnostics;
using Core.Interfaces;

namespace Nepflex.ServiceAPI.Controllers
{
    [RoutePrefix("api/menuTop")]
    //[Authorize]
    public class MenuTopController : ApiController
    {
        public IMenuTopService _menuTopService;
        private IUnitOfWork _unitOfWork { get; set; }

        public MenuTopController(IMenuTopService menuTopService)
        {
            _menuTopService = menuTopService;
        }

        //[Route("getMenu")]
        //[HttpGet]
        //public IHttpActionResult GetMenuNav()
        //{
        //    Console.WriteLine("came here in GetMenuNav");
        //    try
        //    {
        //        var menuNavList = _menuTopService.GetMenuNav();
        //        return Ok(menuNavList);
        //    }
        //    catch (Exception ex)
        //    {
        //        return InternalServerError(ex);
        //    }
        //}

        //[Route("getMenuContainer")]
        //[HttpGet]
        //public IHttpActionResult GetMenuContainer()
        //{
        //    try
        //    {
        //        var menuTopList = _menuTopService.GetMenuTopItems();
        //        return Ok(menuTopList);
        //    }
        //    catch (Exception ex)
        //    {
        //        return InternalServerError(ex);
        //    }
        //}

        //[Route("getClothingBrand")]
        //[HttpGet]
        //public IHttpActionResult GetClothingBrands()
        //{
        //    try
        //    {
        //        var clothingBrand = _menuTopService.GetClothingBrands();
        //        return Ok(clothingBrand);
        //    }
        //    catch (Exception ex)
        //    {
        //        return InternalServerError(ex);
        //    }
        //}

        //[Route("clearenceList")]
        //[HttpGet]
        //public IHttpActionResult GetMenuClearence()
        //{
        //    try
        //    {
        //        var clearence = _menuTopService.GetMenuClearence();
        //        return Ok(clearence);
        //    }
        //    catch (Exception ex)
        //    {
        //        return InternalServerError(ex);
        //    }
        //}
        //[Route("fashion")]
        //[HttpGet]
        //public IHttpActionResult GetFashion()
        //{
        //    try
        //    {
        //        var fashion = _menuTopService.GetFashion();
        //        return Ok(fashion);
        //    }
        //    catch (Exception ex)
        //    {
        //        return InternalServerError(ex);
        //    }
        //}

        //[Route("getNewArrival")]
        //[HttpGet]
        //public IHttpActionResult GetNewArrival()
        //{
        //    try
        //    {
        //        var newArrival = _menuTopService.GetNewArrival();
        //        return Ok(newArrival);
        //    }
        //    catch (Exception ex)
        //    {
        //        return InternalServerError(ex);
        //    }
        //}
    }
}
