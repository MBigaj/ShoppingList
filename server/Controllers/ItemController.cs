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
        [HttpGet("/api/items")]
        public async Item[] GetAllItems()
        {

            // return items;
        }

        [HttpGet("/api/my-items")]
        public void GetMyItems()
        {
            // // Item[] items = Items.Where(i => i.count > 0).ToArray();
            // Item[] myItems = Array.Empty<Item>();
            // for (int i = 0; i < items.Length; i++) {
            //     if (items[i].count > 0) {
            //         myItems.Append(items[i]);
            //     }
            // }

            // return myItems;
        }

        [HttpPost("/api/new-item")]
        public void PostAddItem(Item item)
        {
            // for (int i = 0; i < items.Length; i++) {
            //     if (items[i].id == item.id) {
            //         items[i].count = item.count;
            //     }
            // }
        }
    }
}