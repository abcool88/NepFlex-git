using Microsoft.Practices.Unity;
using System;
using System.Web.Http;
using Unity.WebApi;
using DependencyResolution;

namespace Nepflex.ServiceAPI
{
    public static class UnityConfig
    {
        private static Lazy<IUnityContainer> container = new Lazy<IUnityContainer>(() =>
        {
            var container = new UnityContainer();
            RegisterComponents(container);
            return container;
        });
        public static IUnityContainer GetConfiguredContainer()
        {
            return container.Value;
        }
        public static void RegisterComponents(IUnityContainer container)
        {
			//var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();

            //var unity = new UnityContainer();
            //unity.RegisterType<,> (new HierarchicalLifetimeManager());
            
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
            //registering types
            DependencyResolution.UnityConfig.RegisterTypes(container);
        }
    }
}