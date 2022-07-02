"use strict";
const { hashPassword } = require("../../utils/hash");
module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert("Users", [
      {
        firstname: "dusabe",
        lastname: "tytyne",
        occupation: 23,
        username: "tytyne55",
        adminId:1,
        email: "tytyne@example.com",
        password: await hashPassword("tytyne12345"),
        isVerified: true,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
       
      },
      {
        username: "tytyne123",
        email: "dusaflora2@gmail.com",
        firstname: "umuringa",
        lastname: "ariane",
        occupation: "12",
        adminId:2,
        password: await hashPassword("tytyne1234"),
        isVerified: true,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "fimboo",
        firstname: "fimbo",
        // lastname: "finance",
        occupation: "10",
        adminId:1,
        email: "fimbofinance@gmail.com",
        password: await hashPassword("tytyne1234"),
        isVerified: true,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),
  down: async (queryInterface) => queryInterface.bulkDelete("Users", null, {}),
};
