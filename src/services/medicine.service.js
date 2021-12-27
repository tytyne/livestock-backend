import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Medicine} = models;

/**
 * @description This model deals with Medicine model
 */

class MedicineService{
    static async createMedicine(value){
        let medicine = await Medicine.create(value)
        return medicine
    }
    static async getMedicineById(id){
        let medicine = await Medicine.findOne({where:{id:id}})
        return medicine

    }
    static async getAllMedicines(){
        let medicine = await Medicine.findAll()
        return medicine

    }
    static async updateById(id,value){
        let medicine = await Medicine.update(value,{where:{id:id}})
        return medicine

    }

    static async deleteById(id,userId){
        let medicine = await Medicine.destroy({where:{id:id}})
        return medicine
    }


}
export default MedicineService