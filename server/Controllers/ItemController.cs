using Microsoft.AspNetCore.Mvc;
using ShoppingList.Models;

namespace ShoppingList.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : ControllerBase
    {
        private static Item[] items = new[]
        {
            new Item{id =1, name = "The Godfather", cost=1, count=0 },
            new Item{id =2, name = "Highlander", cost=2, count=0},
            new Item{id =3, name = "Highlander II", cost=3, count=0},
            new Item{id =4, name = "The Last of the Mohicans", cost=4, count=0},
            new Item{id =5, name = "Police Academy 6", cost=5, count=0},
            new Item{id =6, name = "Rear Window", cost=6, count=0},
            new Item{id =7, name = "Road House", cost=7, count=0},
            new Item{id =8, name = "The Shawshank Redemption", cost=8, count=0},
            new Item{id =9, name = "Star Treck IV", cost=9, count=0},
            new Item{id =10, name = "Superman 4", cost=10, count=0},
            new Item{id = 11, name = "Abbey Road", cost=11, count=0},
            new Item{id = 12, name = "Adrenalize", cost=12, count=0},
            new Item{id = 13, name = "Back in Black", cost=13, count=0},
            new Item{id = 14, name = "Enjoy the Silence", cost=14, count=0},
            new Item{id = 15, name = "Parachutes", cost=15, count=0},
            new Item{id = 16, name = "Ride the Lightning", cost=16, count=0},
            new Item{id = 17, name = "Rock or Bust", cost=17, count=0},
            new Item{id = 18, name = "Rust in Peace", cost=18, count=0},
            new Item{id = 19, name = "St. Anger", cost=19, count=0},
            new Item{id = 20, name = "The Final Countdown", cost=20, count=0}
        };

        [HttpGet("/api/items")]
        public Item[] GetAllItems()
        {
            return items;
        }

        [HttpGet("/api/my-items")]
        public Item[] GetMyItems()
        {
            // Item[] items = Items.Where(i => i.count > 0).ToArray();
            Item[] myItems = Array.Empty<Item>();
            for (int i = 0; i < items.Length; i++) {
                if (items[i].count > 0) {
                    myItems.Append(items[i]);
                }
            }

            return myItems;
        }

        [HttpPost("/api/new-item")]
        public void PostAddItem(Item item)
        {
            for (int i = 0; i < items.Length; i++) {
                if (items[i].id == item.id) {
                    items[i].count = item.count;
                }
            }
        }
    }
}