'use strict';

"use strict";
const { hashPassword } = require("../../utils/hash");
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert("Admins", [
      {
        id: uuidv4(),
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
        id: uuidv4(),
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
        id: uuidv4(),
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
        id: uuidv4(),
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
