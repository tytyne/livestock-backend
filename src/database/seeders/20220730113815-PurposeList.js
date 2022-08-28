'use strict';

'use strict';


module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "PurposeLists",
    [
      {
        name:"Market Ready",
        shortcode: "market-read",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"Processing Purpose",
        shortcode: "processing-purpose",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("PurposeLists", null, {})
};





