import models from "../database/models/index"
import "regenerator-runtime/runtime";
const { Animal } = models;
import {
    Op, where, cast, col,sequelize
  } from 'sequelize';

/**
 * @description This model deals with Animal model
 */

class AnimalService {
    static async createAnimal(value) {
        let animal = await Animal.create(value)
        return animal
    }
    static async getAnimalById(animalId) {
        let animal = await Animal.findOne({ where: { id: animalId } })
        return animal

    }

    static async getAnimalDetailsById(animalId) {
        let animal = await Animal.findOne({ where: { id: animalId } })
        return animal

    }

    static async getAnimalByEarring(input) {
        let animal = await Animal.findOne({ where: { earring_num: input } })
        return animal

    }
    static async getAllanimals(vetId) {
        let animal = await Animal.findAll({ where: { createdBy: vetId,status:"active" } })
        return animal

    }

    static async updateById(value, id) {
        let animal = await Animal.update(value, {
            where: { id: id }, returning: true,
        })
        return animal

    }
    //check  offstring
    static async getAllOffstrings(animalId) {
        let animal = await Animal.findAll({  where: {
            [Op.or]: [
              { mother_id:animalId},
              { father_id:animalId}
            ]
          } })
        return animal

    }
    //check ancentors

    static async getAllAncentors(animalId) {
        let animal = await Animal.findAll(

            {
                where:{
                    id:animalId

                },
                // attributes: ['name','coloring','weight','birth_date'],
                include:[
                    
                    {   attributes: ['id','name','coloring','weight','birth_date'],
                        model:models.Animal,
                        as:"mother"
                    
                    },
                    {   attributes: ['id','name','coloring','weight','birth_date'],
                        model:models.Animal,
                        as:"father"
                    
                    }     
                
                ]
                
            })
        return animal

    }

    // update group ...

    static async updateAnimalByGroupId(checkid,value) {
        let data= await Animal.update(
            { group_id:value },
            { where: { id: checkid },
            returning: true,
            // plain: true,
        }
          )
        return data;

    }

    
    // update father

    static async updateAnimalFather(ressource_id,fatherId){
        const animal = await Animal.update({father_id:fatherId}, {
          where: { id: ressource_id },
          returning: true,
          })
        return animal
      }


    // update mother

    static async updateAnimalMother(ressource_id,motherId){
        const animal = await Animal.update({mother_id:motherId}, {
          where: { id: ressource_id },
          returning: true,
          })
        return animal
      }


    static async deleteById(id) {
        let animal = await Animal.destroy({ where: { id: id } })
        return animal
    }
    static async countAnimals(vetId) {
        let animal = await Animal.count({ where: { createdBy: vetId,status:"active"} })
        return animal
    }

    static async updateAnimalStatus(value, id) {
        let data = await Animal.update(value, { status: 'dead' }, {
            where: { id: id }, returning: true,
        })
        return data

    }
    static async getAllAnimalReports() {
        let animal = await Animal.findAll(

            {
                attributes: ["id","earring_num", "status", "sex", "ageInDays"],

                include: [
                    {
                        model: models.Farm,
                        as: "farm",
                        attributes: {
                            exclude: ['createdAt', 'updatedAt', "phone","nid","gender","farmer_cat","bank_acc","province","district","sector","cell","village","others","status","createdBy"

                        ]
                        },

                        include: [
                            {
                                model: models.Farmer,
                                as: "farmer",
                                attributes: {
                                    exclude: ['createdAt', 'updatedAt', "phone","nid","gender","farmer_cat","bank_acc","province","district","sector","cell","village","others","status","createdBy"

                                    ]
                                },

                            },


                        ]
                    },
                    {
                        model: models.PurposeList,
                        as: "purposeList",
                        attributes: { exclude: ['shortcode', 'createdAt', 'updatedAt'] },
                    },
                    {
                        model: models.AnimalCategory,
                        as: "animalCategory",
                        attributes: { exclude: ['shortcode', 'createdAt', 'updatedAt'] },
                    },
                    {
                        model: models.User,
                        as: "user",
                        attributes: { exclude: ['password', 'occupation', 'adminId', 'username', 'email', 'role', 'isVerified', 'status', 'createdAt', 'updatedAt'] },

                    },

                ]
            }
        );

        return animal

    }

    static async getAllanimalss() {
        let animal = await Animal.findAll({where:{status:"active"}})
        return animal

    }
    static async getAllFemaleAnimals() {
        let animal = await Animal.findAll({where:{ gender: {
            [Op.like]: 'female%'
          }}})
        return animal

    }
    static async getAllMaleAnimals() {
        let animal = await Animal.findAll({where:{ gender: {
            [Op.like]: 'male%'
          }}})
        return animal

    }

    static async searchAnimals(sss){
        let data = await Animal.findAll({ where: {group_id: {
            // "$eq" changes to "[Op.eq]"
            [Op.eq]: null
          },name: sss,status:"active" } })
        return data
    }

    static async countingAnimals(number){
        let data = await Animal.count({ where: { group_id: number} })
        return data
    }

    static async animalLikeGroup(){
        let data = await Animal.findAll({where:{is_group:true},
        attributes: ['id','name','group_qty'],
        })
        return data 
    }
    //search animal
    static async searchAnimal(sss){
        let data = await Animal.findAll({ where: {name: sss,status:"active" } })
        return data
    }

}
export default AnimalService


