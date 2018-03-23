using Core.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using NepFlex.DataAccess.Context;

namespace DataAccess.Repositories
{
    public class Repository<T, TKey> : ReadOnlyRepository<T, TKey>, IRepository<T, TKey> where T : class
    {
        protected readonly DbSet<T> Items;
        public Repository(ICooperVisionContext context) : base(context)
        {
            Items = Context.Set<T>();
        }
        public T Create()
        {
            return Items.Create();
        }
        public override T GetById(TKey id)
        {
            return Items.Find(id);
        }
        public IEnumerable<T> FindBy(Expression<Func<T, bool>> predicate, params string[] childern)
        {
            var dbQuery = Items.AsQueryable();
            foreach (var child in childern)
            {
                dbQuery = dbQuery.Include(child);
            }
            return dbQuery.Where(predicate);
        }
        public IEnumerable<T> FindBy<TField>(Expression<Func<T, bool>> predicate, Expression<Func<T, TField>> orderExpression, int page, int pageSize, bool descending)
        {
            if (page < 0)
            {
                page = 0;
            }
            var count = Items.Where(predicate).Count();
            if (count < pageSize)
            {
                pageSize = count;
            }
            var skipSize = pageSize * (page - 1);
            if (descending)
            {
                return Items.Where(predicate).OrderByDescending(orderExpression).Skip(skipSize).Take(pageSize).ToList();
            }
            return Items.Where(predicate).OrderBy(orderExpression).Skip(skipSize).Take(pageSize).ToList();
        }
        public override IEnumerable<T> GetAll()
        {
            return Items.ToList();
        }
        public virtual T Add(T entity)
        {
            return Items.Add(entity);
        }
        public virtual T Delete(T entity)
        {
            return Items.Remove(entity);
        }
        public virtual void Edit(T entity)
        {
            Context.Entry(entity).State = EntityState.Modified;
        }
    }

    public class ReadOnlyRepository<T, TKey> : ReadOnlyRepository<T>, IReadOnlyRepository<T, TKey> where T : class
    {
        public ReadOnlyRepository(ICooperVisionContext context) : base(context)
        {
        }
        public virtual T GetById(TKey id)
        {
            var item = Context.Set<T>().Find(id);
            ((IObjectContextAdapter)Context).ObjectContext.Detach(item);
            return item;
        }
    }
    public class ReadOnlyRepository<T> : IReadOnlyRepository<T> where T : class
    {
        protected ICooperVisionContext Context;
        protected DbQuery<T> ReadOnlyItems => Context.Set<T>().AsNoTracking();

        public ReadOnlyRepository(ICooperVisionContext context)
        {
            Context = context;
        }
        public virtual IEnumerable<T> GetAll()
        {
            return ReadOnlyItems.ToList();
        }
        public virtual IEnumerable<T> GetAll(string include)
        {
            return ReadOnlyItems.Include(include).ToList();
        }
    }
}
