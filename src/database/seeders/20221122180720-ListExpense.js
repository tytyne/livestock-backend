'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "ListExpenses",
    [
      {
        key: "Car and truck expenses",
        name:"Car and truck expenses",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "Chemicals",
        name:"Chemicals",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    
      {
        key: "Conservation expenses",
        name:"Conservation expenses",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      {
        key: "Custom hire (machine work)",
        name:"Custom hire (machine work)",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },

      {
        key:"Depreciation",
        name:"Depreciation",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "Employee benefit programs",
        name:"Employee benefit programs",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key:"Feed",
        name:"Feed",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "Fertilizers and lime",
        name:"Fertilizers and lime",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },

      {
        key: "freight",
        name:"Freight and trucking",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "gasoline",
        name:"Gasoline, fuel, and oil",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "insurance",
        name:"Insurance (other than health)",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "fertilizers",
        name:"Fertilizers and lime",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "pension",
        name:"Pension and profit-sharing plans",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },

    
      {
        key: "mortgage",
        name:"Interest Mortgage (paid to banks, etc.)",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "interest-other",
        name:"Interest Other",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "labor",
        name:"Labor hired (less employment credits)",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },

      {
        key: "purchase-livestock",
        name:"Purchase of livestock",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "machinery",
        name:"Rent or Lease of Vehicles, machinery, equipment",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "rent",
        name:"Rent or Lease of Other (land, animals, etc.)",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "repairs",
        name:"Repairs and maintenance",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "seeds",
        name:"Seeds and plants",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "storage",
        name:"Storage and warehousing",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "supplies",
        name:"Supplies",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "fertilizers",
        name:"Fertilizers and lime",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "utilities",
        name:"Utilities",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "taxes",
        name:"Taxes",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "veterinary-breeding",
        name:"Veterinary, breeding, and medicine",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "other-expenses",
        name:"Other expenses",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
       
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("ListExpenses", null, {})
};




// name:"Insurance (other than health)",
// name:"Interest Mortgage (paid to banks, etc.)",
// name:"Interest Other",
// name:"Labor hired (less employment credits)",
// name:"Pension and profit-sharing plans",
// name:"Purchase of livestock",
// namme:"Rent or Lease of Vehicles, machinery, equipment",
// name:"Rent or Lease of Other (land, animals, etc.)",
// name:"Repairs and maintenance",
// name:"Seeds and plants",
// name:"Storage and warehousing",
// name:"Supplies",
// name:"Taxes",
// name:"Utilities",
// name:"Veterinary, breeding, and medicine",
