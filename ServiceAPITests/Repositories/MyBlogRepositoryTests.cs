using DataAccess;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Nepflex.ServiceAPI.Controllers;
using NepFlex.Core.Entities.CooperVision;
using NepFlex.Core.Entities.ResourceModels;
using NepFlex.Core.Interfaces.Repositories;
using NepFlex.Core.Interfaces.Services;
using NepFlex.DataAccess.Context;
using NepFlex.DataAccess.Repositories;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.DataAccess.Repositories.Tests
{
    [TestClass()]
    public class MyBlogRepositoryTests
    {
        //mocked some blog data
        private List<NepFlex.DataAccess.Context.MyBlog> GetMockedData()
        {
            var mockedResult = new List<NepFlex.DataAccess.Context.MyBlog>
            {
               new NepFlex.DataAccess.Context.MyBlog {BlogId = 1, Title = "Habitat", Detail = "where are these habitat found?",CreatedOn="Mar 25 2016 12:14PM"},
               new NepFlex.DataAccess.Context.MyBlog {BlogId = 2, Title = "My Birthday", Detail = "When I was 4 years old..",CreatedOn="Mar 26 2017 12:14PM"},
               new NepFlex.DataAccess.Context.MyBlog {BlogId = 3, Title = "Hello World", Detail = "World famous first computer typing..",CreatedOn="Mar 27 2018 12:14PM"}
             };

            return mockedResult;
        }
        //mock some comment
        private List<NepFlex.DataAccess.Context.MyBlogCommentsSReturnModel> GetMockedBlogComment()
        {
            var mockedResult = new List<NepFlex.DataAccess.Context.MyBlogCommentsSReturnModel>
            {
               new NepFlex.DataAccess.Context.MyBlogCommentsSReturnModel {Comment="Good Article",Created_On="Mar 25 2018 10:18AM"},
               new NepFlex.DataAccess.Context.MyBlogCommentsSReturnModel {Comment="very common word in computer world...",Created_On="Mar 26 2018 11:18AM"},
               new NepFlex.DataAccess.Context.MyBlogCommentsSReturnModel {Comment="This is really awesome.",Created_On="Mar 27 2018 12:18PM"}
             };

            return mockedResult;
        }

        [TestMethod]
        public void GetBlogDetailByID()
        {
            var data = GetMockedData().AsQueryable();

            var mockingContext = new Mock<DbSet<NepFlex.DataAccess.Context.MyBlog>>();
            mockingContext.As<IQueryable<NepFlex.DataAccess.Context.MyBlog>>().Setup(m => m.Provider).Returns(data.Provider);
            mockingContext.As<IQueryable<NepFlex.DataAccess.Context.MyBlog>>().Setup(m => m.Expression).Returns(data.Expression);
            mockingContext.As<IQueryable<NepFlex.DataAccess.Context.MyBlog>>().Setup(m => m.ElementType).Returns(data.ElementType);
            mockingContext.As<IQueryable<NepFlex.DataAccess.Context.MyBlog>>().Setup(m => m.GetEnumerator()).Returns(data.GetEnumerator());

            var mockContext = new Mock<ICooperVisionContext>();
            mockContext.Setup(c => c.MyBlogs).Returns(mockingContext.Object);

            var service = new MyBlogRepository(mockContext.Object);

            var blogs = service.GetMyBlogDetail(2);

            Assert.AreEqual(1, blogs.Count);
            Assert.AreEqual("My Birthday", blogs[0].Title);
            Assert.AreEqual("When I was 4 years old..", blogs[0].Detail);
            Assert.AreEqual("Mar 26 2017 12:14PM", blogs[0].Created_On);
        }

        [TestMethod()]
        public void GetMyBlogCommentTest()
        {
            var mockUpData = GetMockedBlogComment().AsQueryable();

            var mockingContext = new Mock<List<NepFlex.DataAccess.Context.MyBlogCommentsSReturnModel>>();
            mockingContext.As<IQueryable<NepFlex.DataAccess.Context.MyBlogCommentsSReturnModel>>().Setup(m => m.Provider).Returns(mockUpData.Provider);
            mockingContext.As<IQueryable<NepFlex.DataAccess.Context.MyBlogCommentsSReturnModel>>().Setup(m => m.Expression).Returns(mockUpData.Expression);
            mockingContext.As<IQueryable<NepFlex.DataAccess.Context.MyBlogCommentsSReturnModel>>().Setup(m => m.ElementType).Returns(mockUpData.ElementType);
            mockingContext.As<IQueryable<NepFlex.DataAccess.Context.MyBlogCommentsSReturnModel>>().Setup(m => m.GetEnumerator()).Returns(mockUpData.GetEnumerator());

            var mockContext = new Mock<ICooperVisionContext>();
            mockContext.Setup(c => c.MyBlogCommentsS(2)).Returns(mockingContext.Object);

            var service = new MyBlogRepository(mockContext.Object);

            var blogs = service.GetComments(2);

           // Assert.AreEqual(1, blogs.Count);
        }
    }
}