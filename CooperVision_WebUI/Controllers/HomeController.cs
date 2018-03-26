using System.Web.Mvc;

namespace CooperVision_WebUI.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View("Index");
        }

        public ActionResult CreateNewBlog()
        {
            return View("CreateNewBlog");
        }
    }
}