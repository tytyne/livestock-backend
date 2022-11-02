'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExpenseType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ExpenseType.init({
    shortcode: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ExpenseType',
  });
  return ExpenseType;
};