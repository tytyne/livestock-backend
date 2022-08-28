'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "Vaccinations",
    [
      {
        
        name:"Intraocular, MD vaccine Newcastle",
        disease:"Newcastle, Marek Disease",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"IB vaccine",
        disease:"Infectious bronchitis",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    
      {
        name:"Gumboro vaccine",
        disease:"Infectious bursal disease",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      {
        name:"Poxinet",
        disease:"Fowl pox",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"Lasota",
        disease:"Newcastle",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"Fowl typhoid vaccine ",
        disease:"Fowl typhoid",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"Gumboro vaccine",
        disease:"Infectious bursal disease",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
     

      {
        name:"Poxinet booster",
        disease:"Fowl pox",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"Fowl cholera vaccine",
        disease:"Fowl cholera",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"Fowl cholera vaccine booster",
        disease:"Fowl cholera",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"IB vaccine booster",
        disease:"Infectious bronchitis",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    
      {
        name:"Mareks Disease Vaccine (HVT)",
        disease:"Marek disease",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"Ranikhet Disease Vaccine- RDVF",
        disease:"Ranikhet disease",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"Infectious Bursal Disease Vaccine",
        disease:"Infectious bursal disease",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"Infectious Bronchitis",
        disease:"Infectious Bronchitis",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"IB Vaccine Booster",
        disease:"Infectious bronchitis",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"RD vaccine Booster- La Sota",
        disease:"Ranikhet disease",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"Fowl Pox Vaccine or Infectious Coryza Vaccine",
        disease:"Fowl pox or infectious coryza",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"RD vaccine- RDVK or R,B",
        disease:"Ranikhet disease",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"Fowl Pox Vaccine",
        disease:"Fowl pox",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"IB Booster",
        disease:"Infectious Bronchitis",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name:"RD Booster- RDVK or R,B",
        disease:"Ranikhet disease",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },

      {
        name:"RD La Sota",
        disease:"Ranikhet disease",
        unit: 100,
        price:3000,
        measurement:"kilograms",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
  
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("Vaccinations", null, {})
};





