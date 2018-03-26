using Microsoft.VisualStudio.TestTools.UnitTesting;
using CooperVision_WebUI.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace CooperVision_WebUI.Controllers.Tests
{
    [TestClass]
    public class BlogControllerTests
    {
        [TestMethod]
        public void BlogDetailTest()
        {
            var controller = new BlogController();
            var result = controller.BlogDetail("2") as ViewResult;
            Assert.AreEqual("BlogDetail", result.ViewName);
        }
    }
}