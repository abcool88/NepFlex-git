using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.Core.Entities.ResourceModels
{
    public class MenuTopContainer
    {
        //public int MenuPopID { get; }
        //public string MenuPopContainer { get; set; }
        //public string MenuPopUrl  { get; set; }
        //public int? MenuID { get; set; }
        //public bool Active { get; set; }
        //public DateTime? DateInserted { get; set; }
        //public DateTime? DateUpdated { get; set; }
        //public string Validity { get; set; }
        //public int? MultipleMenuID { get; set; }
        public int? MenuID { get; set; }
        public int MenuPopID { get; set; }
        public String MenuPopContainer { get; set; }
        public String MenuPopUrl { get; set; }
        public Boolean MenuStillActive { get; set; }
        public DateTime? MenuContainerValidity { get; set; }
        public int? BrandID { get; set; }
        public String BrandName { get; set; }
        public String BrandUrl { get; set; }
        public Boolean? BrandStillActive { get; set; }
        public String BrandRemarks { get; set; }
        public int? ClearenceID { get; set; }
        public String ClearenceUrl { get; set; }
        public DateTime? ClearenceCalidity { get; set; }
        public String ClearenceRemarks { get; set; }
    }
}
