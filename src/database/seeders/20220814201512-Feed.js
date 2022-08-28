'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "Feeds",
    [
      {
        animalCategoryId:2,
        name: "starter",
        unit: 1000,
        price:400,
        age:"2-4",
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        animalCategoryId:2,
        name: "finisher",
        unit: 1000,
        price:500,
        age:"2-4",
        description:"mpbaa",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    ])

  }