using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.Core.Entities.ResourceModels
{
    public class MenuTopContainer
    {
        public int MenuPopID { get; }
        public string MenuPopContainer { get; set; }
        public string MenuPopUrl  { get; set; }
        public int? MenuID { get; set; }
        public bool Active { get; set; }
        public DateTime? DateInserted { get; set; }
        public DateTime? DateUpdated { get; set; }
        public string Validity { get; set; }
        public int? MultipleMenuID { get; set; }
    }
}
