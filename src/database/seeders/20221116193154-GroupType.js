
'use strict';


module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "GroupTypes",
    [
      {
        key: "basic",
        name:"Basic Group - Manually assign animals",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "set",
        name:"Set - Track records for multiple animals, like a flock together",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    
       
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("GroupTypes", null, {})
};
