'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bin.init({
    name: DataTypes.STRING,
    capacity: DataTypes.STRING,
    internal_id: DataTypes.STRING,
    description: DataTypes.STRING,
    unit: DataTypes.STRING,
    warehouse_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Bin',
  });
  return Bin;
};