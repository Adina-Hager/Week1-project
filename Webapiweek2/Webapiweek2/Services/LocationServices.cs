using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webapiweek2.Interfaces;
using Webapiweek2.Models;



namespace Webapiweek2.Services
{
    public class LocationServices : ILocation
    {
        public List<Location> allLocations = new List<Location>();
        public List<User> allUsers = new List<User>();
        public LocationServices()
        {
            init();
        }
        
        public void init()
        {
            //allLocations.Add(new Location(new DateTime(2021, 4, 13), new DateTime(2021, 4, 14), "bnei brak", "park"));
            //allLocations.Add
            //allLocations.Add
            //allLocations.Add

            allUsers.Add(new User("1"));
            allUsers.FirstOrDefault(u => u.userId == "1").userLocations.Add(new Location(new DateTime(2021, 4, 13), new DateTime(2021, 4, 14), "Bnei Brak", "park"));
            allUsers.FirstOrDefault(u => u.userId == "1").userLocations.Add(new Location(new DateTime(2021, 4, 15), new DateTime(2021, 4, 16), "Bnei Brak", "shop"));
            allUsers.Add(new User("2"));
            allUsers.FirstOrDefault(u => u.userId == "2").userLocations.Add(new Location(new DateTime(2021, 5, 10), new DateTime(2021, 5, 11), "Jerusalem", "library"));
            allUsers.Add(new User("3"));
            allUsers.FirstOrDefault(u => u.userId == "3").userLocations.Add(new Location(new DateTime(2022, 4, 5), new DateTime(2022, 4, 6), "Tzfat", "library"));
            allUsers.Add(new User("4"));
            allUsers.FirstOrDefault(u => u.userId == "4").userLocations.Add(new Location(new DateTime(2021, 4, 1), new DateTime(2021, 4, 1), "Tzfat", "shop"));

        }



        public List<Location> getAllLocations()
        {
           
          foreach(User user in allUsers)
            {
                foreach (Location location in user.userLocations)
                    allLocations.Add(location);
            }
            return allLocations;
        }

        public List<Location> getByCity(string city)
        {
            List<Location> locBycity;
            locBycity= getAllLocations().Where(l => l.city == city).ToList();
            return locBycity;
        }

        public List<Location> getByPatientId(string id)
        {
            
            return allUsers.FirstOrDefault(u => u.userId == id).userLocations.ToList();
        }

        public void  postExposure(Location location, string id )
        {
           
                User user = allUsers.FirstOrDefault(u => u.userId == id);
                if (user == null)
                {
                    allUsers.Add(new User(id));
                }
                allUsers.FirstOrDefault(u => u.userId == id).userLocations.Add(location);
          
           
          


        }
    }
}
