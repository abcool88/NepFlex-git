using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.Core.Entities.ResourceModels
{
    public class ClothingBrands
    {
        public int BrandId { get; set; } // BrandID (Primary key)
        public int? MenuId { get; set; } // MenuID
        public string BrandName { get; set; } // BrandName (length: 150)
        public string BrandUrl { get; set; } // BrandUrl (length: 350)
        public bool Active { get; set; } // Active (Primary key)
        public DateTime DateInserted { get; set; } // DateInserted (Primary key)
        public DateTime? DateUpdated { get; set; } // DateUpdated
        public string Remarks { get; set; } // Remarks (length: 150)
    }
}
