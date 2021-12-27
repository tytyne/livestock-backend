'use strict';
const {hashPassword}=require("../../utils/hash");
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
   await queryInterface.bulkInsert(
     "Users", [
    {
    username:'tytyne123',
    email:'dusaflora2@gmail.com',
    fullname:'dusabeyezu Florentine',
    occupation:'12',
    password: await hashPassword("tytyne1234"),
    createdAt: new Date(),
    updatedAt: new Date(),
    },
    {
      username:'fimboo',
      fullname:'fimbo finance',
      occupation:'10',
      email:'fimbofinance@gmail.com',
      password: await hashPassword("tytyne1234"),
      createdAt: new Date(),
      updatedAt: new Date(),
      }
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete("Users", null, {});
     
  }
};
