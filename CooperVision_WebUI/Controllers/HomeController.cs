using System.Web.Mvc;

namespace CooperVision_WebUI.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult CreateNewBlog()
        {
            return View();
        }
    }
}