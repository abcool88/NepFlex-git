using System.Collections.Generic;


namespace Core.Interfaces.Repositories
{
    public interface IRepository<T, in TKey>:IReadOnlyRepository<T,TKey>
    {
        T Add(T entity);
        T Delete(T entity);
        void Edit(T entity);
        T Create();
    }

    public interface IReadOnlyRepository<T, in TKey>:IReadOnlyRepository<T>
    {
        T GetById(TKey id);
    }

    public interface IReadOnlyRepository<out T>
    {
        IEnumerable<T> GetAll();
        IEnumerable<T> GetAll(string include);
    }
}
