using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.Core.Entities.ResourceModels
{
    public class SearchedKeywordResults
    {
        public string[] SearchKeywords { get; set; }
        public string[] SearchResponse { get; set; }
        public bool? IsSingleKeyword { get; set; }
    }
}
