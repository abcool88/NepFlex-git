﻿using Core.Interfaces.Repositories;
using NepFlex.Core.Entities.ResourceModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.Core.Interfaces.Repositories
{
    public interface IDetailRepository : IRepository<DetailResponse, int>
    {
        List<DetailResponse> GetDetailOfIndividualItem(int id);
    }
}
