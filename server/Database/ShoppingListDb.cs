using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ShoppingList.Models;

namespace ShoppingList.Database
{
    public class ShoppingListDb : DbContext
    {
        public ShoppingListDb(DbContextOptions<ShoppingListDb> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            ConfigureItemEntity(modelBuilder.Entity<Item>());
            base.OnModelCreating(modelBuilder);
        }

        private void ConfigureItemEntity(EntityTypeBuilder<Item> entity)
        {
            entity.ToTable("Item");
            entity.Property(a => a.name).IsRequired();
            entity.Property(a => a.cost).IsRequired();
            entity.Property(a => a.type);
            entity.Property(a => a.imageId).IsRequired();
        }

        public DbSet<Item> Item { get; set; }
    }
}