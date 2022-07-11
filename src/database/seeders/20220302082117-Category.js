'use strict';

'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "Categories",
    [
      {
        shortcode: "medicine",
        name:"Medicine",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        shortcode: "feed",
        name:"Feed",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    
      {
        shortcode: "vet_service",
        name:"Vet services",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      {
        shortcode: "other",
        name:"Others",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
       
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("Categories", null, {})
};




