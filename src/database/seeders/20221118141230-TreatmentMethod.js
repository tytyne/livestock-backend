'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "TreatmentMethods",
    [
      {
        key: "intramuscular",
        name:"Intramuscular (in the muscle)",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "intramamary",
        name:"Intramammary (in the udder)",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    
      {
        key: "intrauterine",
        name:"Intrauterine (in the uterus)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      {
        key: "oral",
        name:"Oral (in the mouth)",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },

      {
        key: "subcutaneous",
        name:"Subcutaneous (under the skin)",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "topical",
        name:"Topical (on the skin)",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "other",
        name:"Other",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
       
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("TreatmentMethods", null, {})
};



