using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Nepflex.ServiceAPI.Controllers;
using NepFlex.Core.Entities.CooperVision;
using NepFlex.Core.Entities.ResourceModels;
using NepFlex.Core.Interfaces.Services;
using NepFlex.Core.Services;
using NepFlex.DataAccess.Context;
using NepFlex.DataAccess.Repositories;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;

namespace Nepflex.ServiceAPI.Controllers.Tests
{
    [TestClass]
    public class MyBlogControllerTests
    {
        //mocked some data
        private List<MyBlogData> GetMockedBlogData()
        {
            var mockedResult = new List<MyBlogData>
            {
               new MyBlogData {BlogID = 1, Title = "Hello World", Detail = "Famous tech word.."},
               new MyBlogData {BlogID = 2, Title = "All", Detail = "All is well"},
               new MyBlogData {BlogID = 3, Title = "englis", Detail = "Do you speak english?"}
             };

            return mockedResult;
        }

        [TestMethod]
        public void GetMyBlogDataTest()
        {
            // Arrange
            var mockedResult = GetMockedBlogData();

            // Arrange
            var mockRepository = new Mock<IMyBlogService>(); //Mock using Moq
            mockRepository.Setup(x => x.GetMyBlogData())
                .Returns(mockedResult);

            var controller = new MyBlogController(mockRepository.Object);

            //// Act
            IHttpActionResult actionResult = controller.GetMyBlogData();
            var contentResult = actionResult as OkNegotiatedContentResult<List<MyBlogData>>;

            // Assert
            Assert.IsNotNull(contentResult);
            Assert.IsNotNull(contentResult.Content);
        }
    }
}