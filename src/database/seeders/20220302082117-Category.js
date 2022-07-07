'use strict';

'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "Categories",
    [
      {
        shortcode: "medicine",
        name:"Medicine",
        
      },
      {
        shortcode: "feed",
        name:"Feed",
        
      },
    
      {
        shortcode: "vet_service",
        name:"Vet services",
        
      },
    
      {
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


