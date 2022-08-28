import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Medicine} = models;


/**
 * @description This model deals with Medicine model
 */

class MedicineService{
   
    static async getMedicineById(id){
        let data = await Medicine.findOne({where:{id:id}})
        return data

    }
    static async getAllMedicines(){
        let data = await Medicine.findAll()
       
        return data

    }
   


}
export default MedicineService