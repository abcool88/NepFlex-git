using Core.Interfaces;
using NepFlex.Core.Entities.ResourceModels;
using NepFlex.Core.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.Core.Services
{
    public class SearchService:ISearchService
    {
        private IUnitOfWork _unitOfWork { get; set; }
        public SearchService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
       public List<SearchResponse> GetSearchResponseList(string searchText)
        {
            return _unitOfWork.SearchRepository.GetSearchResponseList(searchText);
        }
        public List<string[]> GetSearchKeywordList(string searchText)
        {
            return _unitOfWork.SearchRepository.GetSearchKeywordList();
        }
    }
}
