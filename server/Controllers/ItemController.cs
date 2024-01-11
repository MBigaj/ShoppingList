using Microsoft.AspNetCore.Mvc;
using NJsonSchema.Annotations;
using ShoppingList.Models;
using ShoppingList.Database;

namespace ShoppingList.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : ControllerBase
    {
        private ShoppingListDb db;
        private StreamReader reader;

        public ItemController(ShoppingListDb db)
        {
            this.db = db;
        }

        [HttpGet("/api/items")]
        public IEnumerable<Item> GetAllItems()
        {
            var items = this.db.Item.Select(s => new Item
            {
                id = s.id,
                name = s.name,
                cost = s.cost,
                count = s.count,
                imageId = s.imageId
            });

            return items;
        }

        [HttpGet("/api/my-items")]
        public IEnumerable<Item> GetMyItems()
        {
            var myItems = this.db.Item.Where(item => item.count > 0);

            return myItems;
        }

        [HttpPost("/api/new-item")]
        public void PostAddItem(Item item)
        {
            this.db.Item.Update(item);
            this.db.SaveChanges();
        }
    }
}