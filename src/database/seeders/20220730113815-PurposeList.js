'use strict';

'use strict';


module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "PurposeLists",
    [
      {
        name:"Market Ready",
        shortcode: "market-ready",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"Parent Stock",
        shortcode: "parent-stock-purpose",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("PurposeLists", null, {})
};





