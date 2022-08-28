import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{PurposeList} = models;


/**
 * @description This model deals with PurposeList model
 */

class PurposeListService{
   
    static async getPurposeListById(id){
        let data = await PurposeList.findOne({where:{id:id}})
        return data

    }
    static async getAllPurposeLists(){
        let data = await PurposeList.findAll()
       
        return data

    }
   


}
export default PurposeListService