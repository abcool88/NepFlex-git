using Microsoft.VisualStudio.TestTools.UnitTesting;
using CooperVision_WebUI.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using NepFlex.Core.Entities.ResourceModels;
using NepFlex.Core.Interfaces.Repositories;
using Moq;
using Nepflex.ServiceAPI.Controllers;
using NepFlex.Core.Interfaces.Services;
using System.Web.Http;
using System.Web.Http.Results;

namespace CooperVision_WebUI.Controllers.Tests
{
    [TestClass()]
    public class HomeControllerTests
    {
        [TestMethod()]
        public void Index_PositiveTest()
        {
            var controller = new HomeController();
            var result = controller.Index() as ViewResult;
            Assert.AreEqual("Index", result.ViewName);
        }

        [TestMethod()]
        public void Index_NegativeTest()
        {
            var controller = new HomeController();
            var result = controller.Index() as ViewResult;
            Assert.AreNotEqual("asjdfhjk", result.ViewName);
        }

        [TestMethod()]
        public void CreateNewBlog_PositiveTest()
        {
            var controller = new HomeController();
            var result = controller.CreateNewBlog() as ViewResult;
            Assert.AreEqual("CreateNewBlog", result.ViewName);
        }

        [TestMethod()]
        public void CreateNewBlog_NegativeTest()
        {
            var controller = new HomeController();
            var result = controller.CreateNewBlog() as ViewResult;
            Assert.AreNotEqual("laskdhfoihf", result.ViewName);
        }
    }
}