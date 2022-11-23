'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "ListIncomes",
    [
      {
        key: "sales-of-livestock",
        name:"Sales of livestock and other resale items",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "basis-of-livestock",
        name:"Cost or other basis of livestock",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    
      {
        key: "sales-of-livestock",
        name:"Sales of livestock, produce, grains, and other products you raised",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      {
        key: "cooperative-distributions",
        name:"Cooperative distributions",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },

      {
        key: "agricultural-program",
        name:"Agricultural program payments",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "commodity-credit",
        name:"Commodity Credit Corporation (CCC) loans reported under election",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "loans-forfeited",
        name:"CCC loans forfeited",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "crop-insurance",
        name:"Crop insurance proceeds and federal crop disaster payments",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "custom-hire",
        name:"Custom hire (machine work) income",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        key: "other",
        name:"Other income",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
       
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("ListIncome", null, {})
};

