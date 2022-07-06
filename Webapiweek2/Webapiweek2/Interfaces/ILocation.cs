using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webapiweek2.Models;



namespace Webapiweek2.Interfaces
{
    public interface ILocation
    {
        public List<Models.Location> getAllLocations();

        public List<Models.Location> getByCity(string city);

        public List<Models.Location> getByPatientId( string id);

        public void postExposure(Location location, string id);
    }
}
