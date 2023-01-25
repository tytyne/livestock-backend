"use strict";
const { hashPassword } = require("../../utils/hash");
const { v4: uuidv4 } = require('uuid');
module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert("Users", [
      {
        id: uuidv4(),
        firstname: "dusabe",
        lastname: "tytyne",
        occupation: 23,
        username: "tytyne55",
        // adminId:$2b$10$S2vwFXFcVyWx3STuCykA6OCeYzFKNlax7UTqxqSoTnvuuGLKtZoa2,
        email: "dusaflora@yahoo.fr",
        password: await hashPassword("tytyne1234"),
        isVerified: false,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
       
      },
      {
        id: uuidv4(),
        username: "tytyne123",
        email: "dusaflora2@gmail.com",
        firstname: "umuringa",
        lastname: "ariane",
        occupation: "12",
        // adminId:$2b$10$S2vwFXFcVyWx3STuCykA6OCeYzFKNlax7UTqxqSoTnvuuGLKtZoa2,
        password: await hashPassword("tytyne1234"),
        isVerified: true,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        username: "fimboo",
        firstname: "fimbo",
        lastname: "finance",
        occupation: "10",
        // adminId:$2b$10$S2vwFXFcVyWx3STuCykA6OCeYzFKNlax7UTqxqSoTnvuuGLKtZoa2,
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
