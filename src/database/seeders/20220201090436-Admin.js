'use strict';

"use strict";
const { hashPassword } = require("../../utils/hash");
module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert("Admins", [
      {
        firstname: "adminstration",
        lastname: "admin123",
        username: "admin",
        email: "admin@example.com",
        password: await hashPassword("123456"),
        isVerified: true,
        role:"",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
       
      },
      {
        username: "gatytyne",
        email: "admin@gmail.com",
        firstname: "adminstration",
        lastname: "admin123",
        password: await hashPassword("123456"),
        isVerified: true,
        role:"",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "umuhozakeke",
        firstname: "umuhoza",
        lastname: "kelly",
        email: "dusaflora@yahoo.fr",
        password: await hashPassword("13456"),
        isVerified: false,
        role:"",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "yvesk",
        firstname: "kalinijabo",
        lastname: "yves",
        email: "kalives1@yahoo.fr",
        password: await hashPassword("13456"),
        isVerified: true,
        role:"",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),
  down: async (queryInterface) => queryInterface.bulkDelete("Admins", null, {}),
};
