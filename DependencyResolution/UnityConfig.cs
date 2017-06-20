using System;
using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.Configuration;
using Core.Interfaces.Services;
using Core.Services;
using Core.Interfaces.Repositories;
using DataAccess.Repositories;
using NepFlex.DataAccess.Context;
using Core.Interfaces;
using DataAccess;

namespace DependencyResolution
{
    public class UnityConfig
    {
        public static void RegisterTypes(IUnityContainer container)
        {
            container.RegisterType<IOnlinePasalContext, OnlinePasalContext>(new TransientLifetimeManager(), new InjectionConstructor());
            container.RegisterType<IUnitOfWork, UnitOfWork>(new PerRequestLifetimeManager());
            container.RegisterType<IMenuTopService, MenuTopService>();
        }
    }
}
