using System;
using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.Configuration;
using Core.Interfaces.Repositories;
using DataAccess.Repositories;
using NepFlex.DataAccess.Context;
using Core.Interfaces;
using DataAccess;
using NepFlex.Core.Interfaces.Services;
using NepFlex.Core.Services;

namespace DependencyResolution
{
    public class UnityConfig
    {
        public static void RegisterTypes(IUnityContainer container)
        {
            container.RegisterType<ICooperVisionContext, CooperVisionContext>(new TransientLifetimeManager(), new InjectionConstructor());
            container.RegisterType<IUnitOfWork, UnitOfWork>(new PerRequestLifetimeManager());
            container.RegisterType<IReportService, ReportService>();
        }
    }
}
