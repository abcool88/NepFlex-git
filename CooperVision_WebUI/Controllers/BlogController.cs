using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CooperVision_WebUI.Controllers
{
    public class BlogController : Controller
    {
        public ActionResult BlogDetail(string id)
        {
            return View("BlogDetail");
        }
    }
}