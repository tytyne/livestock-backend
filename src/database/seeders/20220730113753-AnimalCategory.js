'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "AnimalCategories",
    [
      {
        name:"Pig",
        shortcode: "pig",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"Chicken",
        shortcode: "chicken",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"Cow",
        shortcode: "cow",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"Goat",
        shortcode: "goat",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    
      
       
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("AnimalCategories", null, {})
};
