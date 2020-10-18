using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.Core.Entities.ResourceModels
{
    public class SearchResponse
    {
        public string SearchText { get; set; }
        public List<ItemsDetails> ItemDetail { get; set; }
    }

}

public class ItemsDetails
{
    public long PostID { get; set; }
    public string Title { get; set; }
    public string Image { get; set; }
    public string Detail { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Contact { get; set; }
    public string Address { get; set; }
    public string Other { get; set; }
    public string TopCategory { get; set; }
    public string SubCategory { get; set; }
    public decimal? Price { get; set; }
    public string Condition { get; set; }
    public string Brand { get; set; }
    public string Modal { get; set; }
    public string Mile_KMPH { get; set; }
    public string Warranty { get; set; }
    public string extra_Warranty { get; set; }
    public DateTime? DateAdded { get; set; }
}
