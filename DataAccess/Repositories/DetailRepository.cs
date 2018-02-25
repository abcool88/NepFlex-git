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
    public class DetailRepository : IDetailRepository
    {
        public IOnlinePasalContext _context;
        public DetailRepository(IOnlinePasalContext context)
        {
            _context = context;
        }
        public async Task<List<DetailResponse>> GetDetailOfIndividualItem(int id)
        {
            var result = await _context.GetDataAsync(id, "Detail");
            var response = result.ResultSet1.Select(a => new DetailResponse()
            {
                Title = a.Title,
                Image = a.Image,
                Detail = a.Detail,
                Name = a.Name,
                Email = a.Email,
                Contact = a.Contact,
                Address = a.Address,
                Other = a.Other,
                TopCategory = a.TopCategory,
                SubCategory = a.SubCategory,
                Price = a.Price,
                Condition = a.Condition,
                Brand = a.Brand,
                Modal = a.Modal,
                Mile_KMPH = a.Mile_KMPH,
                Warranty = a.Warranty,
                Extra_Warranty = a.extra_Warranty,
                DateAdded = a.DateAdded,
                ShowPhoneNumber=a.ShowPhoneNumber,
                ShowEmailID=a.showEmailID,
                ProfilePicture=a.ProfilePicture
            }).ToList();
            return response;
        }
    }
}
