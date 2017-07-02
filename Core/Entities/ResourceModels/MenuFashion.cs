using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.Core.Entities.ResourceModels
{
    public class MenuFashion
    {
        public int FashionId { get; set; } // FashionID (Primary key)
        public string FashionName { get; set; } // FashionName (length: 150)
        public string FashionUrl { get; set; } // FashionUrl (length: 500)
        public bool Active { get; set; } // Active
        public System.DateTime DateInserted { get; set; } // DateInserted
        public int? MenuId { get; set; } // MenuID
        public DateTime? DateUpdate { get; set; } // DateUpdate
        public DateTime? DateValidity { get; set; } // DateValidity
        public string Remarks { get; set; } // Remarks (length: 150)
    }
}
