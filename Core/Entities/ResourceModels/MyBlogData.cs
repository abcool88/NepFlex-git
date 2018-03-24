using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.Core.Entities.ResourceModels
{
    public class MyBlogData
    {
        public int BlogID { get; set; }
        public string Title { get; set; }
        public string Detail { get; set; }
        public DateTime Created_On { get; set; }
    }
}
