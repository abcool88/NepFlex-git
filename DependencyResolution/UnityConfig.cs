using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NepFlex.Core;
using Core.Interfaces;
using Core.Interfaces.Services;
using Core.Services;
using System.ComponentModel;
using Core.Interfaces.Repositories;
using Microsoft.Practices.Unity;

namespace DependencyResolution
{
    public class UnityConfig
    {
        public static void RegisterTypes(IUnityContainer container)
        {
            container.RegisterType<IMenuTopService, MenuTopService>();
        }
    }
}
