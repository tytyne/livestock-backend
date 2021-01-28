'use strict';
const {hashPassword}=require("../../utils/hash");
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
   await queryInterface.bulkInsert(
     "Users", [
    {
    username:'tytyne123',
    email:'dusaflora2@gmail.com',
    password: await hashPassword("tytyne1234"),
    firstname:'dusabeyezu',
    lastname:'florentine',
    provider:'local',
    createdAt: new Date(),
    updatedAt: new Date(),
    },
    {
      username:'fimboo',
      email:'fimbofinance@gmail.com',
      password: await hashPassword("tytyne1234"),
      firstname:'fimbo',
      lastname:'finance',
      provider:'local',
      createdAt: new Date(),
      updatedAt: new Date(),
      }
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete("Users", null, {});
     
  }
};
