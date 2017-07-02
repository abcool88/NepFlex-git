﻿

// ------------------------------------------------------------------------------------------------
// This code was generated by EntityFramework Reverse POCO Generator (http://www.reversepoco.com/).
// Created by Simon Hughes (https://about.me/simon.hughes).
//
// Do not make changes directly to this file - edit the template instead.
//
// The following connection settings were used to generate this file:
//     Configuration file:     "DataAccess\App.config"
//     Connection String Name: "OnlinePasalContext"
//     Connection String:      "data source=localhost;initial catalog=OnlinePasal;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework"
// ------------------------------------------------------------------------------------------------
// Database Edition       : Express Edition (64-bit)
// Database Engine Edition: Express

// <auto-generated>
// ReSharper disable ConvertPropertyToExpressionBody
// ReSharper disable DoNotCallOverridableMethodsInConstructor
// ReSharper disable InconsistentNaming
// ReSharper disable PartialMethodWithSinglePart
// ReSharper disable PartialTypeWithSinglePart
// ReSharper disable RedundantNameQualifier
// ReSharper disable RedundantOverridenMember
// ReSharper disable UseNameofExpression
// TargetFrameworkVersion = 4.6
#pragma warning disable 1591    //  Ignore "Missing XML Comment" warning


namespace NepFlex.DataAccess.Mapping
{
    using System.Linq;

    #region Unit of work

    public interface IOnlinePasalContext : System.IDisposable
    {
        System.Data.Entity.DbSet<Clearence> Clearences { get; set; } // Clearence
        System.Data.Entity.DbSet<ClothingBrand> ClothingBrands { get; set; } // Clothing_Brand
        System.Data.Entity.DbSet<Fashion> Fashions { get; set; } // Fashion
        System.Data.Entity.DbSet<MenuNavigation> MenuNavigations { get; set; } // MenuNavigation
        System.Data.Entity.DbSet<NewArrival> NewArrivals { get; set; } // NewArrival

        int SaveChanges();
        System.Threading.Tasks.Task<int> SaveChangesAsync();
        System.Threading.Tasks.Task<int> SaveChangesAsync(System.Threading.CancellationToken cancellationToken);
        System.Data.Entity.Infrastructure.DbChangeTracker ChangeTracker { get; }
        System.Data.Entity.Infrastructure.DbContextConfiguration Configuration { get; }
        System.Data.Entity.Database Database { get; }
        System.Data.Entity.Infrastructure.DbEntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;
        System.Data.Entity.Infrastructure.DbEntityEntry Entry(object entity);
        System.Collections.Generic.IEnumerable<System.Data.Entity.Validation.DbEntityValidationResult> GetValidationErrors();
        System.Data.Entity.DbSet Set(System.Type entityType);
        System.Data.Entity.DbSet<TEntity> Set<TEntity>() where TEntity : class;
        string ToString();

        // Stored Procedures
        System.Collections.Generic.List<SpMenuContainerReturnModel> SpMenuContainer();
        System.Collections.Generic.List<SpMenuContainerReturnModel> SpMenuContainer(out int procResult);
        System.Threading.Tasks.Task<System.Collections.Generic.List<SpMenuContainerReturnModel>> SpMenuContainerAsync();

    }

    #endregion

    #region Database context

    [System.CodeDom.Compiler.GeneratedCode("EF.Reverse.POCO.Generator", "2.31.1.0")]
    public class OnlinePasalContext : System.Data.Entity.DbContext, IOnlinePasalContext
    {
        public System.Data.Entity.DbSet<Clearence> Clearences { get; set; } // Clearence
        public System.Data.Entity.DbSet<ClothingBrand> ClothingBrands { get; set; } // Clothing_Brand
        public System.Data.Entity.DbSet<Fashion> Fashions { get; set; } // Fashion
        public System.Data.Entity.DbSet<MenuNavigation> MenuNavigations { get; set; } // MenuNavigation
        public System.Data.Entity.DbSet<NewArrival> NewArrivals { get; set; } // NewArrival

        static OnlinePasalContext()
        {
            System.Data.Entity.Database.SetInitializer<OnlinePasalContext>(null);
        }

        public OnlinePasalContext()
            : base("Name=OnlinePasalContext")
        {
        }

        public OnlinePasalContext(string connectionString)
            : base(connectionString)
        {
        }

        public OnlinePasalContext(string connectionString, System.Data.Entity.Infrastructure.DbCompiledModel model)
            : base(connectionString, model)
        {
        }

        public OnlinePasalContext(System.Data.Common.DbConnection existingConnection, bool contextOwnsConnection)
            : base(existingConnection, contextOwnsConnection)
        {
        }

        public OnlinePasalContext(System.Data.Common.DbConnection existingConnection, System.Data.Entity.Infrastructure.DbCompiledModel model, bool contextOwnsConnection)
            : base(existingConnection, model, contextOwnsConnection)
        {
        }

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);
        }

        public bool IsSqlParameterNull(System.Data.SqlClient.SqlParameter param)
        {
            var sqlValue = param.SqlValue;
            var nullableValue = sqlValue as System.Data.SqlTypes.INullable;
            if (nullableValue != null)
                return nullableValue.IsNull;
            return (sqlValue == null || sqlValue == System.DBNull.Value);
        }

        protected override void OnModelCreating(System.Data.Entity.DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Configurations.Add(new ClearenceConfiguration());
            modelBuilder.Configurations.Add(new ClothingBrandConfiguration());
            modelBuilder.Configurations.Add(new FashionConfiguration());
            modelBuilder.Configurations.Add(new MenuNavigationConfiguration());
            modelBuilder.Configurations.Add(new NewArrivalConfiguration());
        }

        public static System.Data.Entity.DbModelBuilder CreateModel(System.Data.Entity.DbModelBuilder modelBuilder, string schema)
        {
            modelBuilder.Configurations.Add(new ClearenceConfiguration(schema));
            modelBuilder.Configurations.Add(new ClothingBrandConfiguration(schema));
            modelBuilder.Configurations.Add(new FashionConfiguration(schema));
            modelBuilder.Configurations.Add(new MenuNavigationConfiguration(schema));
            modelBuilder.Configurations.Add(new NewArrivalConfiguration(schema));
            return modelBuilder;
        }

        // Stored Procedures
        public System.Collections.Generic.List<SpMenuContainerReturnModel> SpMenuContainer()
        {
            int procResult;
            return SpMenuContainer(out procResult);
        }

        public System.Collections.Generic.List<SpMenuContainerReturnModel> SpMenuContainer(out int procResult)
        {
            var procResultParam = new System.Data.SqlClient.SqlParameter { ParameterName = "@procResult", SqlDbType = System.Data.SqlDbType.Int, Direction = System.Data.ParameterDirection.Output };
            var procResultData = Database.SqlQuery<SpMenuContainerReturnModel>("EXEC @procResult = [dbo].[SP_MenuContainer] ", procResultParam).ToList();

            procResult = (int) procResultParam.Value;
            return procResultData;
        }

        public async System.Threading.Tasks.Task<System.Collections.Generic.List<SpMenuContainerReturnModel>> SpMenuContainerAsync()
        {
            var procResultData = await Database.SqlQuery<SpMenuContainerReturnModel>("EXEC [dbo].[SP_MenuContainer] ").ToListAsync();

            return procResultData;
        }

    }
    #endregion

    #region Fake Database context

    [System.CodeDom.Compiler.GeneratedCode("EF.Reverse.POCO.Generator", "2.31.1.0")]
    public class FakeOnlinePasalContext : IOnlinePasalContext
    {
        public System.Data.Entity.DbSet<Clearence> Clearences { get; set; }
        public System.Data.Entity.DbSet<ClothingBrand> ClothingBrands { get; set; }
        public System.Data.Entity.DbSet<Fashion> Fashions { get; set; }
        public System.Data.Entity.DbSet<MenuNavigation> MenuNavigations { get; set; }
        public System.Data.Entity.DbSet<NewArrival> NewArrivals { get; set; }

        public FakeOnlinePasalContext()
        {
            Clearences = new FakeDbSet<Clearence>("ClearenceId", "Active", "DateInserted");
            ClothingBrands = new FakeDbSet<ClothingBrand>("BrandId", "Active", "DateInserted");
            Fashions = new FakeDbSet<Fashion>("FashionId");
            MenuNavigations = new FakeDbSet<MenuNavigation>("MenuId");
            NewArrivals = new FakeDbSet<NewArrival>("NewArrivalId", "Active", "DateInserted");
        }

        public int SaveChangesCount { get; private set; }
        public int SaveChanges()
        {
            ++SaveChangesCount;
            return 1;
        }

        public System.Threading.Tasks.Task<int> SaveChangesAsync()
        {
            ++SaveChangesCount;
            return System.Threading.Tasks.Task<int>.Factory.StartNew(() => 1);
        }

        public System.Threading.Tasks.Task<int> SaveChangesAsync(System.Threading.CancellationToken cancellationToken)
        {
            ++SaveChangesCount;
            return System.Threading.Tasks.Task<int>.Factory.StartNew(() => 1, cancellationToken);
        }

        protected virtual void Dispose(bool disposing)
        {
        }

        public void Dispose()
        {
            Dispose(true);
        }

        public System.Data.Entity.Infrastructure.DbChangeTracker _changeTracker;
        public System.Data.Entity.Infrastructure.DbChangeTracker ChangeTracker { get { return _changeTracker; } }
        public System.Data.Entity.Infrastructure.DbContextConfiguration _configuration;
        public System.Data.Entity.Infrastructure.DbContextConfiguration Configuration { get { return _configuration; } }
        public System.Data.Entity.Database _database;
        public System.Data.Entity.Database Database { get { return _database; } }
        public System.Data.Entity.Infrastructure.DbEntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class
        {
            throw new System.NotImplementedException();
        }
        public System.Data.Entity.Infrastructure.DbEntityEntry Entry(object entity)
        {
            throw new System.NotImplementedException();
        }
        public System.Collections.Generic.IEnumerable<System.Data.Entity.Validation.DbEntityValidationResult> GetValidationErrors()
        {
            throw new System.NotImplementedException();
        }
        public System.Data.Entity.DbSet Set(System.Type entityType)
        {
            throw new System.NotImplementedException();
        }
        public System.Data.Entity.DbSet<TEntity> Set<TEntity>() where TEntity : class
        {
            throw new System.NotImplementedException();
        }
        public override string ToString()
        {
            throw new System.NotImplementedException();
        }


        // Stored Procedures
        public System.Collections.Generic.List<SpMenuContainerReturnModel> SpMenuContainer()
        {
            int procResult;
            return SpMenuContainer(out procResult);
        }

        public System.Collections.Generic.List<SpMenuContainerReturnModel> SpMenuContainer(out int procResult)
        {

            procResult = 0;
            return new System.Collections.Generic.List<SpMenuContainerReturnModel>();
        }

        public System.Threading.Tasks.Task<System.Collections.Generic.List<SpMenuContainerReturnModel>> SpMenuContainerAsync()
        {
            int procResult;
            return System.Threading.Tasks.Task.FromResult(SpMenuContainer(out procResult));
        }

    }

    // ************************************************************************
    // Fake DbSet
    // Implementing Find:
    //      The Find method is difficult to implement in a generic fashion. If
    //      you need to test code that makes use of the Find method it is
    //      easiest to create a test DbSet for each of the entity types that
    //      need to support find. You can then write logic to find that
    //      particular type of entity, as shown below:
    //      public class FakeBlogDbSet : FakeDbSet<Blog>
    //      {
    //          public override Blog Find(params object[] keyValues)
    //          {
    //              var id = (int) keyValues.Single();
    //              return this.SingleOrDefault(b => b.BlogId == id);
    //          }
    //      }
    //      Read more about it here: https://msdn.microsoft.com/en-us/data/dn314431.aspx
    [System.CodeDom.Compiler.GeneratedCode("EF.Reverse.POCO.Generator", "2.31.1.0")]
    public class FakeDbSet<TEntity> : System.Data.Entity.DbSet<TEntity>, IQueryable, System.Collections.Generic.IEnumerable<TEntity>, System.Data.Entity.Infrastructure.IDbAsyncEnumerable<TEntity> where TEntity : class
    {
        private readonly System.Reflection.PropertyInfo[] _primaryKeys;
        private readonly System.Collections.ObjectModel.ObservableCollection<TEntity> _data;
        private readonly IQueryable _query;

        public FakeDbSet()
        {
            _data = new System.Collections.ObjectModel.ObservableCollection<TEntity>();
            _query = _data.AsQueryable();
        }

        public FakeDbSet(params string[] primaryKeys)
        {
            _primaryKeys = typeof(TEntity).GetProperties().Where(x => primaryKeys.Contains(x.Name)).ToArray();
            _data = new System.Collections.ObjectModel.ObservableCollection<TEntity>();
            _query = _data.AsQueryable();
        }

        public override TEntity Find(params object[] keyValues)
        {
            if (_primaryKeys == null)
                throw new System.ArgumentException("No primary keys defined");
            if (keyValues.Length != _primaryKeys.Length)
                throw new System.ArgumentException("Incorrect number of keys passed to Find method");

            var keyQuery = this.AsQueryable();
            keyQuery = keyValues
                .Select((t, i) => i)
                .Aggregate(keyQuery,
                    (current, x) =>
                        current.Where(entity => _primaryKeys[x].GetValue(entity, null).Equals(keyValues[x])));

            return keyQuery.SingleOrDefault();
        }

        public override System.Threading.Tasks.Task<TEntity> FindAsync(System.Threading.CancellationToken cancellationToken, params object[] keyValues)
        {
            return System.Threading.Tasks.Task<TEntity>.Factory.StartNew(() => Find(keyValues), cancellationToken);
        }

        public override System.Threading.Tasks.Task<TEntity> FindAsync(params object[] keyValues)
        {
            return System.Threading.Tasks.Task<TEntity>.Factory.StartNew(() => Find(keyValues));
        }

        public override System.Collections.Generic.IEnumerable<TEntity> AddRange(System.Collections.Generic.IEnumerable<TEntity> entities)
        {
            if (entities == null) throw new System.ArgumentNullException("entities");
            var items = entities.ToList();
            foreach (var entity in items)
            {
                _data.Add(entity);
            }
            return items;
        }

        public override TEntity Add(TEntity item)
        {
            if (item == null) throw new System.ArgumentNullException("item");
            _data.Add(item);
            return item;
        }

        public override System.Collections.Generic.IEnumerable<TEntity> RemoveRange(System.Collections.Generic.IEnumerable<TEntity> entities)
        {
            if (entities == null) throw new System.ArgumentNullException("entities");
            var items = entities.ToList();
            foreach (var entity in items)
            {
                _data.Remove(entity);
            }
            return items;
        }

        public override TEntity Remove(TEntity item)
        {
            if (item == null) throw new System.ArgumentNullException("item");
            _data.Remove(item);
            return item;
        }

        public override TEntity Attach(TEntity item)
        {
            if (item == null) throw new System.ArgumentNullException("item");
            _data.Add(item);
            return item;
        }

        public override TEntity Create()
        {
            return System.Activator.CreateInstance<TEntity>();
        }

        public override TDerivedEntity Create<TDerivedEntity>()
        {
            return System.Activator.CreateInstance<TDerivedEntity>();
        }

        public override System.Collections.ObjectModel.ObservableCollection<TEntity> Local
        {
            get { return _data; }
        }

        System.Type IQueryable.ElementType
        {
            get { return _query.ElementType; }
        }

        System.Linq.Expressions.Expression IQueryable.Expression
        {
            get { return _query.Expression; }
        }

        IQueryProvider IQueryable.Provider
        {
            get { return new FakeDbAsyncQueryProvider<TEntity>(_query.Provider); }
        }

        System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
        {
            return _data.GetEnumerator();
        }

        System.Collections.Generic.IEnumerator<TEntity> System.Collections.Generic.IEnumerable<TEntity>.GetEnumerator()
        {
            return _data.GetEnumerator();
        }

        System.Data.Entity.Infrastructure.IDbAsyncEnumerator<TEntity> System.Data.Entity.Infrastructure.IDbAsyncEnumerable<TEntity>.GetAsyncEnumerator()
        {
            return new FakeDbAsyncEnumerator<TEntity>(_data.GetEnumerator());
        }
    }

    [System.CodeDom.Compiler.GeneratedCode("EF.Reverse.POCO.Generator", "2.31.1.0")]
    public class FakeDbAsyncQueryProvider<TEntity> : System.Data.Entity.Infrastructure.IDbAsyncQueryProvider
    {
        private readonly IQueryProvider _inner;

        public FakeDbAsyncQueryProvider(IQueryProvider inner)
        {
            _inner = inner;
        }

        public IQueryable CreateQuery(System.Linq.Expressions.Expression expression)
        {
            return new FakeDbAsyncEnumerable<TEntity>(expression);
        }

        public IQueryable<TElement> CreateQuery<TElement>(System.Linq.Expressions.Expression expression)
        {
            return new FakeDbAsyncEnumerable<TElement>(expression);
        }

        public object Execute(System.Linq.Expressions.Expression expression)
        {
            return _inner.Execute(expression);
        }

        public TResult Execute<TResult>(System.Linq.Expressions.Expression expression)
        {
            return _inner.Execute<TResult>(expression);
        }

        public System.Threading.Tasks.Task<object> ExecuteAsync(System.Linq.Expressions.Expression expression, System.Threading.CancellationToken cancellationToken)
        {
            return System.Threading.Tasks.Task.FromResult(Execute(expression));
        }

        public System.Threading.Tasks.Task<TResult> ExecuteAsync<TResult>(System.Linq.Expressions.Expression expression, System.Threading.CancellationToken cancellationToken)
        {
            return System.Threading.Tasks.Task.FromResult(Execute<TResult>(expression));
        }
    }

    [System.CodeDom.Compiler.GeneratedCode("EF.Reverse.POCO.Generator", "2.31.1.0")]
    public class FakeDbAsyncEnumerable<T> : EnumerableQuery<T>, System.Data.Entity.Infrastructure.IDbAsyncEnumerable<T>, IQueryable<T>
    {
        public FakeDbAsyncEnumerable(System.Collections.Generic.IEnumerable<T> enumerable)
            : base(enumerable)
        { }

        public FakeDbAsyncEnumerable(System.Linq.Expressions.Expression expression)
            : base(expression)
        { }

        public System.Data.Entity.Infrastructure.IDbAsyncEnumerator<T> GetAsyncEnumerator()
        {
            return new FakeDbAsyncEnumerator<T>(this.AsEnumerable().GetEnumerator());
        }

        System.Data.Entity.Infrastructure.IDbAsyncEnumerator System.Data.Entity.Infrastructure.IDbAsyncEnumerable.GetAsyncEnumerator()
        {
            return GetAsyncEnumerator();
        }

        IQueryProvider IQueryable.Provider
        {
            get { return new FakeDbAsyncQueryProvider<T>(this); }
        }
    }

    [System.CodeDom.Compiler.GeneratedCode("EF.Reverse.POCO.Generator", "2.31.1.0")]
    public class FakeDbAsyncEnumerator<T> : System.Data.Entity.Infrastructure.IDbAsyncEnumerator<T>
    {
        private readonly System.Collections.Generic.IEnumerator<T> _inner;

        public FakeDbAsyncEnumerator(System.Collections.Generic.IEnumerator<T> inner)
        {
            _inner = inner;
        }

        public void Dispose()
        {
            _inner.Dispose();
        }

        public System.Threading.Tasks.Task<bool> MoveNextAsync(System.Threading.CancellationToken cancellationToken)
        {
            return System.Threading.Tasks.Task.FromResult(_inner.MoveNext());
        }

        public T Current
        {
            get { return _inner.Current; }
        }

        object System.Data.Entity.Infrastructure.IDbAsyncEnumerator.Current
        {
            get { return Current; }
        }
    }

    #endregion

    #region POCO classes

    // Clearence
    [System.CodeDom.Compiler.GeneratedCode("EF.Reverse.POCO.Generator", "2.31.1.0")]
    public class Clearence
    {
        public int ClearenceId { get; set; } // ClearenceID (Primary key)
        public int? MenuId { get; set; } // MenuID
        public string ClearenceName { get; set; } // ClearenceName (length: 150)
        public string ClearenceUrl { get; set; } // ClearenceUrl (length: 500)
        public bool Active { get; set; } // Active (Primary key)
        public System.DateTime DateInserted { get; set; } // DateInserted (Primary key)
        public System.DateTime? DateUpdate { get; set; } // DateUpdate
        public System.DateTime? DateValidity { get; set; } // DateValidity
        public string Remarks { get; set; } // Remarks (length: 10)
        public int? ClearencePercent { get; set; } // ClearencePercent

        // Foreign keys

        /// <summary>
        /// Parent MenuNavigation pointed by [Clearence].([MenuId]) (FK_Clearence_MenuNavigation)
        /// </summary>
        public virtual MenuNavigation MenuNavigation { get; set; } // FK_Clearence_MenuNavigation

        public Clearence()
        {
            DateInserted = System.DateTime.Now;
        }
    }

    // Clothing_Brand
    [System.CodeDom.Compiler.GeneratedCode("EF.Reverse.POCO.Generator", "2.31.1.0")]
    public class ClothingBrand
    {
        public int BrandId { get; set; } // BrandID (Primary key)
        public int? MenuId { get; set; } // MenuID
        public string BrandName { get; set; } // BrandName (length: 150)
        public string BrandUrl { get; set; } // BrandUrl (length: 350)
        public bool Active { get; set; } // Active (Primary key)
        public System.DateTime DateInserted { get; set; } // DateInserted (Primary key)
        public System.DateTime? DateUpdated { get; set; } // DateUpdated
        public string Remarks { get; set; } // Remarks (length: 150)

        // Foreign keys

        /// <summary>
        /// Parent MenuNavigation pointed by [Clothing_Brand].([MenuId]) (FK_Clothing_Brand_MenuNavigation)
        /// </summary>
        public virtual MenuNavigation MenuNavigation { get; set; } // FK_Clothing_Brand_MenuNavigation

        public ClothingBrand()
        {
            DateInserted = System.DateTime.Now;
        }
    }

    // Fashion
    [System.CodeDom.Compiler.GeneratedCode("EF.Reverse.POCO.Generator", "2.31.1.0")]
    public class Fashion
    {
        public int FashionId { get; set; } // FashionID (Primary key)
        public string FashionName { get; set; } // FashionName (length: 150)
        public string FashionUrl { get; set; } // FashionUrl (length: 500)
        public bool Active { get; set; } // Active
        public System.DateTime DateInserted { get; set; } // DateInserted
        public int? MenuId { get; set; } // MenuID
        public System.DateTime? DateUpdate { get; set; } // DateUpdate
        public System.DateTime? DateValidity { get; set; } // DateValidity
        public string Remarks { get; set; } // Remarks (length: 150)

        // Foreign keys

        /// <summary>
        /// Parent MenuNavigation pointed by [Fashion].([MenuId]) (FK_Fashion_MenuNavigation)
        /// </summary>
        public virtual MenuNavigation MenuNavigation { get; set; } // FK_Fashion_MenuNavigation

        public Fashion()
        {
            DateInserted = System.DateTime.Now;
        }
    }

    // MenuNavigation
    [System.CodeDom.Compiler.GeneratedCode("EF.Reverse.POCO.Generator", "2.31.1.0")]
    public class MenuNavigation
    {
        public int MenuId { get; set; } // MenuID (Primary key)
        public string MenuName { get; set; } // MenuName (length: 50)
        public string MenuUrl { get; set; } // MenuUrl (length: 200)
        public bool? Active { get; set; } // Active

        // Reverse navigation

        /// <summary>
        /// Child Clearences where [Clearence].[MenuID] point to this entity (FK_Clearence_MenuNavigation)
        /// </summary>
        public virtual System.Collections.Generic.ICollection<Clearence> Clearences { get; set; } // Clearence.FK_Clearence_MenuNavigation
        /// <summary>
        /// Child ClothingBrands where [Clothing_Brand].[MenuID] point to this entity (FK_Clothing_Brand_MenuNavigation)
        /// </summary>
        public virtual System.Collections.Generic.ICollection<ClothingBrand> ClothingBrands { get; set; } // Clothing_Brand.FK_Clothing_Brand_MenuNavigation
        /// <summary>
        /// Child Fashions where [Fashion].[MenuID] point to this entity (FK_Fashion_MenuNavigation)
        /// </summary>
        public virtual System.Collections.Generic.ICollection<Fashion> Fashions { get; set; } // Fashion.FK_Fashion_MenuNavigation
        /// <summary>
        /// Child NewArrivals where [NewArrival].[MenuID] point to this entity (FK_NewArrival_MenuNavigation)
        /// </summary>
        public virtual System.Collections.Generic.ICollection<NewArrival> NewArrivals { get; set; } // NewArrival.FK_NewArrival_MenuNavigation

        public MenuNavigation()
        {
            Clearences = new System.Collections.Generic.List<Clearence>();
            ClothingBrands = new System.Collections.Generic.List<ClothingBrand>();
            Fashions = new System.Collections.Generic.List<Fashion>();
            NewArrivals = new System.Collections.Generic.List<NewArrival>();
        }
    }

    // NewArrival
    [System.CodeDom.Compiler.GeneratedCode("EF.Reverse.POCO.Generator", "2.31.1.0")]
    public class NewArrival
    {
        public int NewArrivalId { get; set; } // NewArrivalID (Primary key)
        public int? MenuId { get; set; } // MenuID
        public string NewArivalBrand { get; set; } // NewArivalBrand (length: 150)
        public string Url { get; set; } // Url (length: 500)
        public bool Active { get; set; } // Active (Primary key)
        public System.DateTime DateInserted { get; set; } // DateInserted (Primary key)
        public string DateUpdated { get; set; } // DateUpdated (length: 10)
        public string Remarks { get; set; } // Remarks (length: 100)

        // Foreign keys

        /// <summary>
        /// Parent MenuNavigation pointed by [NewArrival].([MenuId]) (FK_NewArrival_MenuNavigation)
        /// </summary>
        public virtual MenuNavigation MenuNavigation { get; set; } // FK_NewArrival_MenuNavigation

        public NewArrival()
        {
            DateInserted = System.DateTime.Now;
        }
    }

    #endregion

    #region POCO Configuration

    // Clearence
    [System.CodeDom.Compiler.GeneratedCode("EF.Reverse.POCO.Generator", "2.31.1.0")]
    public class ClearenceConfiguration : System.Data.Entity.ModelConfiguration.EntityTypeConfiguration<Clearence>
    {
        public ClearenceConfiguration()
            : this("dbo")
        {
        }

        public ClearenceConfiguration(string schema)
        {
            ToTable("Clearence", schema);
            HasKey(x => new { x.ClearenceId, x.Active, x.DateInserted });

            Property(x => x.ClearenceId).HasColumnName(@"ClearenceID").HasColumnType("int").IsRequired().HasDatabaseGeneratedOption(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity);
            Property(x => x.MenuId).HasColumnName(@"MenuID").HasColumnType("int").IsOptional();
            Property(x => x.ClearenceName).HasColumnName(@"ClearenceName").HasColumnType("nvarchar").IsOptional().HasMaxLength(150);
            Property(x => x.ClearenceUrl).HasColumnName(@"ClearenceUrl").HasColumnType("nvarchar").IsOptional().HasMaxLength(500);
            Property(x => x.Active).HasColumnName(@"Active").HasColumnType("bit").IsRequired().HasDatabaseGeneratedOption(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.None);
            Property(x => x.DateInserted).HasColumnName(@"DateInserted").HasColumnType("datetime").IsRequired().HasDatabaseGeneratedOption(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.None);
            Property(x => x.DateUpdate).HasColumnName(@"DateUpdate").HasColumnType("datetime").IsOptional();
            Property(x => x.DateValidity).HasColumnName(@"DateValidity").HasColumnType("datetime").IsOptional();
            Property(x => x.Remarks).HasColumnName(@"Remarks").HasColumnType("nchar").IsOptional().IsFixedLength().HasMaxLength(10);
            Property(x => x.ClearencePercent).HasColumnName(@"ClearencePercent").HasColumnType("int").IsOptional();

            // Foreign keys
            HasOptional(a => a.MenuNavigation).WithMany(b => b.Clearences).HasForeignKey(c => c.MenuId).WillCascadeOnDelete(false); // FK_Clearence_MenuNavigation
        }
    }

    // Clothing_Brand
    [System.CodeDom.Compiler.GeneratedCode("EF.Reverse.POCO.Generator", "2.31.1.0")]
    public class ClothingBrandConfiguration : System.Data.Entity.ModelConfiguration.EntityTypeConfiguration<ClothingBrand>
    {
        public ClothingBrandConfiguration()
            : this("dbo")
        {
        }

        public ClothingBrandConfiguration(string schema)
        {
            ToTable("Clothing_Brand", schema);
            HasKey(x => new { x.BrandId, x.Active, x.DateInserted });

            Property(x => x.BrandId).HasColumnName(@"BrandID").HasColumnType("int").IsRequired().HasDatabaseGeneratedOption(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity);
            Property(x => x.MenuId).HasColumnName(@"MenuID").HasColumnType("int").IsOptional();
            Property(x => x.BrandName).HasColumnName(@"BrandName").HasColumnType("nvarchar").IsOptional().HasMaxLength(150);
            Property(x => x.BrandUrl).HasColumnName(@"BrandUrl").HasColumnType("nvarchar").IsOptional().HasMaxLength(350);
            Property(x => x.Active).HasColumnName(@"Active").HasColumnType("bit").IsRequired().HasDatabaseGeneratedOption(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.None);
            Property(x => x.DateInserted).HasColumnName(@"DateInserted").HasColumnType("date").IsRequired().HasDatabaseGeneratedOption(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.None);
            Property(x => x.DateUpdated).HasColumnName(@"DateUpdated").HasColumnType("date").IsOptional();
            Property(x => x.Remarks).HasColumnName(@"Remarks").HasColumnType("nvarchar").IsOptional().HasMaxLength(150);

            // Foreign keys
            HasOptional(a => a.MenuNavigation).WithMany(b => b.ClothingBrands).HasForeignKey(c => c.MenuId).WillCascadeOnDelete(false); // FK_Clothing_Brand_MenuNavigation
        }
    }

    // Fashion
    [System.CodeDom.Compiler.GeneratedCode("EF.Reverse.POCO.Generator", "2.31.1.0")]
    public class FashionConfiguration : System.Data.Entity.ModelConfiguration.EntityTypeConfiguration<Fashion>
    {
        public FashionConfiguration()
            : this("dbo")
        {
        }

        public FashionConfiguration(string schema)
        {
            ToTable("Fashion", schema);
            HasKey(x => x.FashionId);

            Property(x => x.FashionId).HasColumnName(@"FashionID").HasColumnType("int").IsRequired().HasDatabaseGeneratedOption(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity);
            Property(x => x.FashionName).HasColumnName(@"FashionName").HasColumnType("nvarchar").IsOptional().HasMaxLength(150);
            Property(x => x.FashionUrl).HasColumnName(@"FashionUrl").HasColumnType("nvarchar").IsOptional().HasMaxLength(500);
            Property(x => x.Active).HasColumnName(@"Active").HasColumnType("bit").IsRequired();
            Property(x => x.DateInserted).HasColumnName(@"DateInserted").HasColumnType("datetime").IsRequired();
            Property(x => x.MenuId).HasColumnName(@"MenuID").HasColumnType("int").IsOptional();
            Property(x => x.DateUpdate).HasColumnName(@"DateUpdate").HasColumnType("datetime").IsOptional();
            Property(x => x.DateValidity).HasColumnName(@"DateValidity").HasColumnType("datetime").IsOptional();
            Property(x => x.Remarks).HasColumnName(@"Remarks").HasColumnType("nvarchar").IsOptional().HasMaxLength(150);

            // Foreign keys
            HasOptional(a => a.MenuNavigation).WithMany(b => b.Fashions).HasForeignKey(c => c.MenuId).WillCascadeOnDelete(false); // FK_Fashion_MenuNavigation
        }
    }

    // MenuNavigation
    [System.CodeDom.Compiler.GeneratedCode("EF.Reverse.POCO.Generator", "2.31.1.0")]
    public class MenuNavigationConfiguration : System.Data.Entity.ModelConfiguration.EntityTypeConfiguration<MenuNavigation>
    {
        public MenuNavigationConfiguration()
            : this("dbo")
        {
        }

        public MenuNavigationConfiguration(string schema)
        {
            ToTable("MenuNavigation", schema);
            HasKey(x => x.MenuId);

            Property(x => x.MenuId).HasColumnName(@"MenuID").HasColumnType("int").IsRequired().HasDatabaseGeneratedOption(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity);
            Property(x => x.MenuName).HasColumnName(@"MenuName").HasColumnType("nvarchar").IsOptional().HasMaxLength(50);
            Property(x => x.MenuUrl).HasColumnName(@"MenuUrl").HasColumnType("nvarchar").IsOptional().HasMaxLength(200);
            Property(x => x.Active).HasColumnName(@"Active").HasColumnType("bit").IsOptional();
        }
    }

    // NewArrival
    [System.CodeDom.Compiler.GeneratedCode("EF.Reverse.POCO.Generator", "2.31.1.0")]
    public class NewArrivalConfiguration : System.Data.Entity.ModelConfiguration.EntityTypeConfiguration<NewArrival>
    {
        public NewArrivalConfiguration()
            : this("dbo")
        {
        }

        public NewArrivalConfiguration(string schema)
        {
            ToTable("NewArrival", schema);
            HasKey(x => new { x.NewArrivalId, x.Active, x.DateInserted });

            Property(x => x.NewArrivalId).HasColumnName(@"NewArrivalID").HasColumnType("int").IsRequired().HasDatabaseGeneratedOption(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity);
            Property(x => x.MenuId).HasColumnName(@"MenuID").HasColumnType("int").IsOptional();
            Property(x => x.NewArivalBrand).HasColumnName(@"NewArivalBrand").HasColumnType("nvarchar").IsOptional().HasMaxLength(150);
            Property(x => x.Url).HasColumnName(@"Url").HasColumnType("nvarchar").IsOptional().HasMaxLength(500);
            Property(x => x.Active).HasColumnName(@"Active").HasColumnType("bit").IsRequired().HasDatabaseGeneratedOption(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.None);
            Property(x => x.DateInserted).HasColumnName(@"DateInserted").HasColumnType("date").IsRequired().HasDatabaseGeneratedOption(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.None);
            Property(x => x.DateUpdated).HasColumnName(@"DateUpdated").HasColumnType("nchar").IsOptional().IsFixedLength().HasMaxLength(10);
            Property(x => x.Remarks).HasColumnName(@"Remarks").HasColumnType("nvarchar").IsOptional().HasMaxLength(100);

            // Foreign keys
            HasOptional(a => a.MenuNavigation).WithMany(b => b.NewArrivals).HasForeignKey(c => c.MenuId).WillCascadeOnDelete(false); // FK_NewArrival_MenuNavigation
        }
    }

    #endregion

    #region Stored procedure return models

    [System.CodeDom.Compiler.GeneratedCode("EF.Reverse.POCO.Generator", "2.31.1.0")]
    public class SpMenuContainerReturnModel
    {
        public System.Int32? MenuID { get; set; }
        public System.Int32 MenuPopID { get; set; }
        public System.String MenuName { get; set; }
        public System.String MenuUrl { get; set; }
        public System.String MenuPopContainer { get; set; }
        public System.String MenuPopUrl { get; set; }
        public System.Boolean MenuStillActive { get; set; }
        public System.DateTime? MenuContainerValidity { get; set; }
    }

    #endregion

}
// </auto-generated>

