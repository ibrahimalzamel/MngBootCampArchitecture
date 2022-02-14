using Core.ElasticSearch;
using Core.ElasticSearch.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ElasticTestController : BaseController
    {
        IElasticSearch _elasticSearch;

        public ElasticTestController(IElasticSearch elasticSearch)
        {
            _elasticSearch = elasticSearch;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await _elasticSearch.CreateNewIndexAsync(new IndexModel
            {
                IndexName = "brands",
                AliasName = "brands",
                NumberOfReplicas = 1,
                NumberOfShards = 1
            });

            return Ok(result);  
            
        }
    }
}
