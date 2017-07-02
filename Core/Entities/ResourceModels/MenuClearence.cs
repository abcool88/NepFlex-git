using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.Core.Entities.ResourceModels
{
    public class MenuClearence
    {
        public int ClearenceId { get; set; } // ClearenceID (Primary key)
        public int? MenuId { get; set; } // MenuID
        public string ClearenceName { get; set; } // ClearenceName (length: 150)
        public string ClearenceUrl { get; set; } // ClearenceUrl (length: 500)
        public bool Active { get; set; } // Active (Primary key)
        public DateTime DateInserted { get; set; } // DateInserted (Primary key)
        public DateTime? DateUpdate { get; set; } // DateUpdate
        public DateTime? DateValidity { get; set; } // DateValidity
        public string Remarks { get; set; } // Remarks (length: 10)
        public int? ClearencePercent { get; set; } // ClearencePercent
    }
}
