using Microsoft.AspNetCore.Mvc;
using ShoppingList.Models;

namespace ShoppingList.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : ControllerBase
    {
        private static readonly IEnumerable<Item> Items = new[]
        {
            new Item{id =1, itemName = "The Godfather", cost=1 },
            new Item{id =2, itemName = "Highlander", cost=2},
            new Item{id =3, itemName = "Highlander II", cost=3},
            new Item{id =4, itemName = "The Last of the Mohicans", cost=4},
            new Item{id =5, itemName = "Police Academy 6", cost=5},
            new Item{id =6, itemName = "Rear Window", cost=6},
            new Item{id =7, itemName = "Road House", cost=7},
            new Item{id =8, itemName = "The Shawshank Redemption", cost=8},
            new Item{id =9, itemName = "Star Treck IV", cost=9},
            new Item{id =10, itemName = "Superman 4", cost=10},
            new Item{id = 11, itemName = "Abbey Road", cost=11},
            new Item{id = 12, itemName = "Adrenalize", cost=12},
            new Item{id = 13, itemName = "Back in Black", cost=13},
            new Item{id = 14, itemName = "Enjoy the Silence", cost=14},
            new Item{id = 15, itemName = "Parachutes", cost=15},
            new Item{id = 16, itemName = "Ride the Lightning", cost=16},
            new Item{id = 17, itemName = "Rock or Bust", cost=17},
            new Item{id = 18, itemName = "Rust in Peace", cost=18},
            new Item{id = 19, itemName = "St. Anger", cost=19},
            new Item{id = 20, itemName = "The Final Countdown", cost=20}

        };

        [HttpGet("/api/items")]
        public Item[] Get()
        {
            Item[] items = Items.ToArray();
            return items;
        }
    }
}