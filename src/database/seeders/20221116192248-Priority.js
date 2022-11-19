'use strict';



module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "Priorities",
    [
      {
        key: "very-high",
        name:"Very High",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "high",
        name:"High",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    
      {
        key: "medium",
        name:"Medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      {
        key: "low",
        name:"Low",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
       
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("Priorities", null, {})
};
