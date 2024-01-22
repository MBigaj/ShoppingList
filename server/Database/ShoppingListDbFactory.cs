using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using ShoppingList.Database;

namespace lab3.Database
{
    public class ShoppingListDbFactory : IDesignTimeDbContextFactory<ShoppingListDb>
    {
        public ShoppingListDb CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<ShoppingListDb>();
            builder.UseSqlServer("Server=tcp:shopping-list-db.database.windows.net,1433;Initial Catalog=shopping-list-db;Persist Security Info=False;User ID=nick;Password={password};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

            return new ShoppingListDb(builder.Options);
        }
    }
}