import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Contact} = models;


/**
 * @description This model deals with contact model
 */

class ContactService{
   
    static async getcontactById(id){
        let items = await Contact.findOne({where:{id:id}})
        return items

    }
    static async getAllContacts(){
        let items = await Contact.findAll()
       
        return items

    }
    static async getCreateContact(value){
        let items = await Contact.create(value)
       
        return items

    }
   


}
export default ContactService