using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace NepFlex.WebUI
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {

       //attribute routing : Routing is how ASP.NET MVC matches a URI to an action.
       //MVC 5 supports a new type of routing, called attribute routing.
       //As the name implies, attribute routing uses attributes to define routes.
       //Attribute routing gives you more control over the URIs in your web application.

       //Route constraints let you restrict how the parameters in the route template are matched.
       //The general syntax is {parameter:constraint}
      routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "angular-2-routing-fallback",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
