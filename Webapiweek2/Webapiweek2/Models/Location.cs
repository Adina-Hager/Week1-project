using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webapiweek2.Models
{
    public class Location 
    {
        public DateTime start { get; set; }
        public DateTime end { get; set; }
        public string city { get; set; }
        public string location { get; set; }

        public Location(DateTime start, DateTime end, string city, string location)
        {
            this.start = start;
            this.end = end;
            this.city = city;
            this.location = location;
        }
    }
}
