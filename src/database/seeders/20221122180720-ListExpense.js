'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "ListExpenses",
    [
      {
        type:"expense",
        key: "Car and truck expenses",
        name:"Car and truck expenses",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "Chemicals",
        name:"Chemicals",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    
      {
        type:"expense",
        key: "Conservation expenses",
        name:"Conservation expenses",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      {
        type:"expense",
        key: "Custom hire (machine work)",
        name:"Custom hire (machine work)",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },

      {
        type:"expense",
        key:"Depreciation",
        name:"Depreciation",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "Employee benefit programs",
        name:"Employee benefit programs",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key:"Feed",
        name:"Feed",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "Fertilizers and lime",
        name:"Fertilizers and lime",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },

      {
        type:"expense",
        key: "freight",
        name:"Freight and trucking",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "gasoline",
        name:"Gasoline, fuel, and oil",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "insurance",
        name:"Insurance (other than health)",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "fertilizers",
        name:"Fertilizers and lime",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "pension",
        name:"Pension and profit-sharing plans",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },

    
      {
        type:"expense",
        key: "mortgage",
        name:"Interest Mortgage (paid to banks, etc.)",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "interest-other",
        name:"Interest Other",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "labor",
        name:"Labor hired (less employment credits)",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },

      {
        type:"expense",
        key: "purchase-livestock",
        name:"Purchase of livestock",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "machinery",
        name:"Rent or Lease of Vehicles, machinery, equipment",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "rent",
        name:"Rent or Lease of Other (land, animals, etc.)",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "repairs",
        name:"Repairs and maintenance",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "seeds",
        name:"Seeds and plants",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "storage",
        name:"Storage and warehousing",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "supplies",
        name:"Supplies",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "fertilizers",
        name:"Fertilizers and lime",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "utilities",
        name:"Utilities",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "taxes",
        name:"Taxes",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "veterinary-breeding",
        name:"Veterinary, breeding, and medicine",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"expense",
        key: "other-expenses",
        name:"Other expenses",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"income",
        key: "sales-of-livestock",
        name:"Sales of livestock and other resale items",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"income",
        key: "basis-of-livestock",
        name:"Cost or other basis of livestock",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    
      {
        type:"income",
        key: "sales-of-livestock",
        name:"Sales of livestock, produce, grains, and other products you raised",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      {
        type:"income",
        key: "cooperative-distributions",
        name:"Cooperative distributions",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },

      {
        type:"income",
        key: "agricultural-program",
        name:"Agricultural program payments",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"income",
        key: "commodity-credit",
        name:"Commodity Credit Corporation (CCC) loans reported under election",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"income",
        key: "loans-forfeited",
        name:"CCC loans forfeited",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"income",
        key: "crop-insurance",
        name:"Crop insurance proceeds and federal crop disaster payments",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"income",
        key: "custom-hire",
        name:"Custom hire (machine work) income",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        type:"income",
        key: "other",
        name:"Other income",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
       
       
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("ListExpenses", null, {})
};




