'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "Feeds",
    [
      {
        name: "starter",
        unit: 1000,
        price:400,
        description:"mpbaa",
        measurement:"milliliter",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        name: "finisher",
        unit: 1000,
        price:500,
        description:"mpbaa",
        measurement:"milliliter",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
    ])

  }