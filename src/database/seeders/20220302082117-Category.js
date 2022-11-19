'use strict';


module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "Categories",
    [
      {
        shortcode: "Car-and-truck-expenses",
        name:"Car and truck expenses",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        shortcode: "chemicals",
        name:"Chemicals",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    
      {
        shortcode: "conservation-expenses",
        name:"Conservation expenses",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      {
        shortcode: "custom-hire",
        name:"Custom hire(machine work)",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
       
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("Categories", null, {})
};




