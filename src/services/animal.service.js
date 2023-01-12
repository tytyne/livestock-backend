import models from "../database/models/index"
import "regenerator-runtime/runtime";
const { Animal } = models;

/**
 * @description This model deals with Animal model
 */

class AnimalService {
    static async createAnimal(value) {
        let animal = await Animal.create(value)
        return animal
    }
    static async getAnimalById(id) {
        let animal = await Animal.findOne({ where: { id: id } })
        return animal

    }
    static async getAnimalByEarring(input) {
        let animal = await Animal.findOne({ where: { earring_num: input } })
        return animal

    }
    static async getAllanimals(vetId) {
        let animal = await Animal.findAll({ where: { createdBy: vetId } })
        return animal

    }




    static async getA() {
        let data = await Animal.findAll()
        return data

    }
    static async updateById(value, id) {
        let animal = await Animal.update(value, {
            where: { id: id }, returning: true,
            plain: true,
        })
        return animal

    }
    // update father

    static async updateAnimalFather(ressource_id,fatherId){
        const animal = await Animal.update({father_id:fatherId}, {
          where: { id: ressource_id },
          returning: true,
          plain: true,
          })
        return animal
      }


    // update mother

    static async updateAnimalMother(ressource_id,motherId){
        const animal = await Animal.update({mother_id:motherId}, {
          where: { id: ressource_id },
          returning: true,
          plain: true,
          })
        return animal
      }


    static async deleteById(id) {
        let animal = await Animal.destroy({ where: { id: id } })
        return animal
    }
    static async countAnimals(vetId) {
        let animal = await Animal.count({ where: { createdBy: vetId } })
        return animal
    }

    static async updateAnimalStatus(value, id) {
        let data = await Animal.update(value, { status: 'dead' }, {
            where: { id: id }, returning: true,
            plain: true,
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
        let animal = await Animal.findAll()
        return animal

    }

    static async searchAnimals(sss){
        let data = await Animal.findAll({ where: { name: sss } })
        return data
    }

}
export default AnimalService



// "id": 1,
// "earring_num": "1245",
// "birthdate": "2022-08-29",
// "ageInDays": 58,
// "ageInWeeks": 8,
// "ageInMonths": 1,
// "ageInYears": 0,
// "birthkgs": "34",
// "parent": "124351234",
// "sex": "Male",
// "expected_exit": "2022-09-05T00:00:00.000Z",
// "expected_exit_kgs": "56",
// "createdBy": 2,
// "animalCost": 20000,
// "deathReason": null,
// "status": "active",
// "createdAt": "2022-10-25T23:01:13.941Z",
// "updatedAt": "2022-10-25T23:01:13.941Z",
// "farmId": 1,
// "purposeId": 1,
// "animalCategoryId": 1,