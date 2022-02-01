using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorePersistence.Repositories
{
    public class Entity
    {
        public  Entity()
        {

        }

        public Entity(int id):this()
        {
            Id = id;
        }

        public int Id { get; set; }
    }
}
