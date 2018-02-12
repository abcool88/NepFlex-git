using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.Core.Entities.ResourceModels
{
    public class ReportedData
    {
        public long Id { get; set; } // ID (Primary key)
        public string Name { get; set; } // Name (Primary key) (length: 50)
        public string Email { get; set; } // Email (Primary key) (length: 100)
        public string Url { get; set; } // URL (length: 400)
        public string Detail { get; set; } // Detail (Primary key)
        public DateTime DateAdded { get; set; } // DateAdded (Primary key)
        public string UserName { get; set; } // UserName (length: 50)
        public string Ui { get; set; } // UI (length: 5)
    }
}
