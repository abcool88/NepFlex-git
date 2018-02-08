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

        public List<SearchResponse> GetSearchResponseList(string searchText)
        {
            var results = _context.ButtonSearchOnClick(searchText);
            var response= results.Select(a=> new SearchResponse() {
                Address=a.Address,
                Brand=a.Brand,
                Condition=a.Condition,
                Contact=a.Contact,
                DateAdded=a.DateAdded,
                Detail=a.Detail,
                Email=a.Email,
                extra_Warranty=a.extra_Warranty,
                Image=a.Image,
                Mile_KMPH=a.Mile_KMPH,
                Modal=a.Modal,
                Name=a.Name,
                Other=a.Other,
                PostID=a.PostID,
                Price=a.Price,
                SubCategory=a.SubCategory,
                Title=a.Title,
                TopCategory=a.TopCategory,
                Warranty=a.Warranty
            }).ToList();
            return response;
        }
    }
}
