using DataAccess.Repositories;
using NepFlex.Core.Entities.ResourceModels;
using NepFlex.Core.Interfaces.Repositories;
using NepFlex.DataAccess.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.DataAccess.Repositories
{
    public class SearchRepository : Repository<SearchResponse, int>, ISearchRepository
    {
        private readonly IOnlinePasalContext _context;
        public SearchRepository(IOnlinePasalContext context) : base(context)
        {
            _context = context;
        }

        public List<SearchResponse> GetSearchResponseList(string[] searchText)
        {

            // var query = new string[] { searchText[0] }
            ;
            List<string> list = new List<string>(searchText);
            var searchTitle = searchText[0].Split(',');

            List<SearchResponse> response = new List<SearchResponse>();
            for (var i = 0; i < searchTitle.Length; i++)
            {
                var results = _context.ButtonSearchOnClick(searchTitle[i]);
                if (response == null)
                {
                    response = new List<SearchResponse>();
                }
                response.Add(new SearchResponse() { SearchText = searchTitle[i] });
                foreach (var item in results)
                {
                    if (response[i].ItemDetail == null)
                    {
                        response[i].ItemDetail = new List<ItemsDetails>();
                    }
                    response[i].ItemDetail.Add(new ItemsDetails
                    {
                        Address = item.Address,
                        Brand = item.Brand,
                        Condition = item.Condition,
                        Contact = item.Contact,
                        DateAdded = item.DateAdded,
                        Detail = item.Detail,
                        Email = item.Email,
                        extra_Warranty = item.extra_Warranty,
                        Image = item.Image,
                        Mile_KMPH = item.Mile_KMPH,
                        Modal = item.Modal,
                        Name = item.Name,
                        Other = item.Other,
                        PostID = item.PostID,
                        Price = item.Price,
                        SubCategory = item.SubCategory,
                        Title = item.Title,
                        TopCategory = item.TopCategory,
                        Warranty = item.Warranty
                    });
                }
            }

            return response;
        }
    }
}
