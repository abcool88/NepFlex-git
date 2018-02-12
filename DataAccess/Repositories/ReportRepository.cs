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

        public List<ReportedData> getReportedData()
        {
            // string collection
            //IList<ReportedData> stringList = new List<ReportedData>() { };

            //var result = from s in _context.CraigInquiries
            //             select s;

            //var resultList= result.ToList();

            //return resultList;
        }
    }
}
