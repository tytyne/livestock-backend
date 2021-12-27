'use strict';

const faker = require('faker');
const farmers = [...Array(10)].map((farmer) => (
  {
    fullname: faker.name.lastName(),
    userId:faker.name.userId(),
    phone: faker.phone.phoneNumber(),
    animal_cat:'cow',
    nid: faker.datatype.number({
      'min': 10,
      'max': 12
  }),
    gender:faker.internet.gender(),
    farmer_cat:'Category A',
    bank_acc:faker.datatype.number({
      'min': 10,
      'max': 12
  }),
    province:'Nord province',
    district:'musanze',
    cell:'Muhoza',
    sector:'Kivuruga',
    village:'kivuruga',
    createdAt: new Date(),
    updatedAt: new Date()
  }
))
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Farmers', farmers, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Farmers', null, {});
  }
};