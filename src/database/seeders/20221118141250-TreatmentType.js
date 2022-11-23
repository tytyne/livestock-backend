'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "TreatmentTypes",
    [
      {
        key: "alternative-therapy",
        name:"Alternative Therapy",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "artificial-insemination",
        name:"Artificial Insemination",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    
      {
        key: "branding",
        name:"Branding",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      {
        key: "castration",
        name:"Castration",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "dehorning",
        name:"Dehorning",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
       
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("TreatmentTypes", null, {})
};




// "Alternative Therapy", "Artificial Insemination", "Branding", "Castration", "Dehorning", "Dental Procedure",
//  "Deworming", "Ear Notching", "Euthanasia", "Grooming", "Hoof Trim", "Medication", "Mites", "Parasite Treatment",
//   "Surgical Procedure", "Tagging", "Tattoo", "Vaccination", "Other Procedure"









