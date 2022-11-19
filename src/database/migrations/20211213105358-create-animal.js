'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Animals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      farm_id:{
        type: Sequelize.INTEGER
      },
      purpose_id:{
        type: Sequelize.INTEGER
      },
      animalCategory_id:{
        type: Sequelize.INTEGER
      },
      createdBy:{
        type: Sequelize.INTEGER
      },
      birth_date:{
      type: Sequelize.DATE
      },
      birth_weight:{
        type: Sequelize.STRING
      },
      bred_date:{
        type: Sequelize.DATE
      },
      breed:{
        type: Sequelize.STRING
      },
      breed_id:{
        type: Sequelize.STRING
      },
      breeding_status:{
        type: Sequelize.STRING
      },
      breeding_stock:{
        type: Sequelize.STRING
      },
      coloring:{
        type: Sequelize.STRING
      },
      condition_score:{
        type: Sequelize.STRING,
        defaultValue:0
      },
      contact_id:{
        type: Sequelize.STRING
      },
      death_date:{
        type: Sequelize.DATE
      },
      deceased_reason:{
        type: Sequelize.STRING
      },
      description:{
        type: Sequelize.STRING
      },
      electronic_id:{
        type: Sequelize.STRING
      },
      estimated_value:{
        type: Sequelize.STRING
      },
      father_id:{
        type: Sequelize.STRING
      },
      feed:{
        type: Sequelize.STRING
      },
      gender:{
        type: Sequelize.STRING
      },
      group_id:{
        type: Sequelize.STRING
      },
      group_qty:{
        type: Sequelize.STRING
      },
      harvest_label:{
        type: Sequelize.STRING
      },
      harvest_unit:{
        type: Sequelize.STRING
      },
      height:{
        type: Sequelize.STRING
      },
      internal_id:{
        type: Sequelize.STRING
      },
      is_group:{
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      is_neutered:{
        type: Sequelize.BOOLEAN
      },
      keywords:{
        type: Sequelize.STRING
      },
      market_price:{
        type: Sequelize.STRING
      },
      measurement_date:{
        type: Sequelize.DATE
      },
      mother_id:{
        type: Sequelize.STRING
      },
      name:{
        type: Sequelize.STRING
      },
      on_feed:{
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      other_tag_number:{
        type: Sequelize.STRING
      },
      purchase_date:{
        type: Sequelize.DATE
      },
      purchase_price:{
        type: Sequelize.STRING
      },
      purchased:{
        type: Sequelize.BOOLEAN
      },
      purchased_from_id:{
        type: Sequelize.STRING
      },
      registry_number:{
        type: Sequelize.STRING
      },
      retention_score:{
        type: Sequelize.STRING
      },
      sale_date:{
        type: Sequelize.DATE
      },
      sale_price:{
        type: Sequelize.STRING
      },
      sold_to:{
        type: Sequelize.STRING
      },
      status:{
        type: Sequelize.STRING
      },
      tag_color:{
        type: Sequelize.STRING
      },
      tag_number:{
        type: Sequelize.STRING
      },
      weight:{
        type: Sequelize.STRING
      },
      earring_num:{
        type: Sequelize.STRING
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Animals');
  }
};


