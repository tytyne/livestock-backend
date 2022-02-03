'use strict';
const { hashPassword } = require("../../utils/hash");
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "Users",
    [
      {
      firstname:"dusabe",
      lastname:"tytyne",
      occupation:23,
      username:"tytyne55",
      email:"tytyne@example.com",
      password: await hashPassword("tytyne12345"),
      isVerified:true,
      status:"active",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
     
     
    
    ]
  ),
  down: async (queryInterface) => queryInterface.bulkDelete("Users", null, {})
};

