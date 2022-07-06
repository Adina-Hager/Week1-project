using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webapiweek2.Models
{
    public class User
    {
        public string userId { get; set; }
        public List<Location> userLocations { get; set; }

        public User(string userId)
        {
            this.userId = userId;
            this.userLocations = new List<Location>();
        }
        public void addLocation()
        {

        }
    }
}
