using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.Core.Entities.ResourceModels
{
    public class ItemDescription
    {
        public long Id { get; set; } 
        public string Category { get; set; }
        public string Condition { get; set; }
        public string PhoneBrand { get; set; }
        public string AutosBrand { get; set; }
        public string Model { get; set; }
        public string MileKmph { get; set; }
        public string Warranty { get; set; }
        public string ExtraWarranty { get; set; }
    }
}
