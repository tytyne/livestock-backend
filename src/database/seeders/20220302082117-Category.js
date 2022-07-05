'use strict';

'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "Categories",
    [
      {
        id:1,
        shortcode: "medicine",
        name:"Medicine",
        
      },
      {
        id:2,
        shortcode: "feed",
        name:"Feed",
        
      },
    
      {
        id:3,
        shortcode: "vet_service",
        name:"Vet services",
        
      },
    
      {
        id:4,
        shortcode: "other",
        name:"Others",
        
      },
       
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("Categories", null, {})
};

//operations-categories
//gukingira
//gutanga ibiryo farmId   
//imiti
//gutera inanga 
//otherssss
// inka irwaye ...


