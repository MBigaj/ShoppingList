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
            new Item{id =1, name = "The Godfather", cost=1 },
            new Item{id =2, name = "Highlander", cost=2},
            new Item{id =3, name = "Highlander II", cost=3},
            new Item{id =4, name = "The Last of the Mohicans", cost=4},
            new Item{id =5, name = "Police Academy 6", cost=5},
            new Item{id =6, name = "Rear Window", cost=6},
            new Item{id =7, name = "Road House", cost=7},
            new Item{id =8, name = "The Shawshank Redemption", cost=8},
            new Item{id =9, name = "Star Treck IV", cost=9},
            new Item{id =10, name = "Superman 4", cost=10},
            new Item{id = 11, name = "Abbey Road", cost=11},
            new Item{id = 12, name = "Adrenalize", cost=12},
            new Item{id = 13, name = "Back in Black", cost=13},
            new Item{id = 14, name = "Enjoy the Silence", cost=14},
            new Item{id = 15, name = "Parachutes", cost=15},
            new Item{id = 16, name = "Ride the Lightning", cost=16},
            new Item{id = 17, name = "Rock or Bust", cost=17},
            new Item{id = 18, name = "Rust in Peace", cost=18},
            new Item{id = 19, name = "St. Anger", cost=19},
            new Item{id = 20, name = "The Final Countdown", cost=20}

        };

        [HttpGet("/api/items")]
        public Item[] Get()
        {
            Item[] items = Items.ToArray();
            return items;
        }
    }
}