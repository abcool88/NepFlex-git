using Core.Entities.ResourceModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces.Services
{
    public interface IMenuTopService
    {
       List<MenuTopContainer> GetMenuTopItems();
    }
}
