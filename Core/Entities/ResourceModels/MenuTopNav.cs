using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.Core.Entities.ResourceModels
{
    public class MenuTopNav
    {
        public int MenuId { get; set; } // MenuID (Primary key)
        public string MenuName { get; set; } // MenuName (length: 50)
        public string MenuUrl { get; set; } // MenuUrl (length: 200)
        public bool? Active { get; set; } // Active
    }
}
