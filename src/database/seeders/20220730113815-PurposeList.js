'use strict';

'use strict';


module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "PurposeLists",
    [
      {
        name:"Market Purpose",
        shortcode: "market-purpose",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"Breeding Purpose",
        shortcode: "breeding-purpose",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("PurposeLists", null, {})
};





