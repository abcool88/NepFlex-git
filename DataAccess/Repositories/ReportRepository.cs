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
    public class ReportRepository : Repository<string, int>, IReportRepository
    {
        private readonly IOnlinePasalContext _context;
        public ReportRepository(IOnlinePasalContext context) : base(context)
        {
            _context = context;
        }

        public List<ReportedData> GetReportedData()
        {
            var db = _context.CraigInquiries;
            var resultList = db.Select(a => new ReportedData
            {
                DateAdded = a.DateAdded,
                Email = a.Email,
                Detail = a.Detail,
                Id = a.Id,
                Name = a.Name,
                Ui = a.Ui,
                Url = a.Url,
                UserName = a.UserName
            }).ToList();

            return resultList;
        }
        public int SaveReportData(ReportedData item)
        {
            var tt = _context.SpCraigInquiry(item.Name, item.Email, item.Url, item.Detail, item.UserName, "new");

            return tt ;
        }
    }
}
