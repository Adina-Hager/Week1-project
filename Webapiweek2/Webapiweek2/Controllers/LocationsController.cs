using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Webapiweek2.Interfaces;
using Webapiweek2.Models;
using Webapiweek2.Services;


namespace Webapiweek2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationsController : ControllerBase
    {
        ILocation loc;
        public LocationsController(ILocation _loc)
        {
            loc = _loc;
        }


        [HttpGet("getAllLocations")]
        
        public IActionResult getAllLocations()
        {
            
            try 
            {
                return Ok (loc.getAllLocations());
                
            }
            catch(Exception e)
            {
                return (IActionResult) e;
            }

         
            
        }
        [HttpGet("getByCity/{city}")]
        public IActionResult getByCity(string city)
        {
            return Ok(loc.getByCity(city));
        }
        [HttpGet("getByUserId/{id}")]
        public IActionResult getByUserId(string id)
        {
            return Ok(loc.getByPatientId(id));
        }

        [HttpPost("addExposure/{id}")]
        public IActionResult addExposure(string id ,[FromBody] Location location)
        {
            
           loc.postExposure(location, id);
           return Ok();



        }

    }
}
