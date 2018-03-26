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


        [TestMethod]
        public void ThenVerifyTheRightLoginUrlIsReturned()
        {
            // Arrange
            var faqs = new List<MyBlogData>
    {
        new MyBlogData {BlogID = 1, Title = "Home", Detail = "Where Do you Live?"},
        new MyBlogData {BlogID = 2, Title = "Since I was 11", Detail = "When did you start programming?"},
        new MyBlogData {BlogID = 3, Title = "In Pennsylvania", Detail = "Where were you born?"}
    };
            var faqRepository = new Mock<IMyBlogService>();
            faqRepository.Setup(e => e.GetMyBlogDetail(2)).Returns(faqs);
            var controller = new MyBlogController(faqRepository.Object);
            // Act 
            var result = controller.GetMyBlogDetail(2) as ViewResult;
            var model = result.Model as FaqViewModel;
            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(3, model.FAQs.Count());
        }
    }
}