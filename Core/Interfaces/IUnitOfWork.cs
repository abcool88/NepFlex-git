using Core.Interfaces.Repositories;
using NepFlex.Core.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IMyBlogRepository MyBlogRepository { get; }
        bool Save();
    }
}
