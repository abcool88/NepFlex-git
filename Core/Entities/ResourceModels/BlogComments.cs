using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.Core.Entities.ResourceModels
{
    public class BlogComments
    {
        [Required]
        [DataType(DataType.MultilineText)]
        [StringLength(1)]
        public string Comment { get; set; }
        public string Created_On { get; set; }
    }
}
