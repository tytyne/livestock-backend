import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Note} = models;


/**
 * @description This model deals with Note model
 */

class NoteService{

    static async createNote(value){
        let data = await Note.create(value)
        return data
    }
   
    static async getNoteById(id){
        let data = await Note.findOne({where:{id:id}})
        return data

    }
   
    static async getAllNotes(animal){
        let data = await Note.findAll({where:{animalId:animal}})
       
        return data

    }

    // update note

    static async updateNoteById(value,id){

        let data = await Note.update(value,{where:{id:id},returning: true,
            plain: true,})
        return data 

    }

    static async deleteNoteById(id){
        let data = await Note.destroy({where:{id:id}})
        return data
    }

    static async searchNote(sss){
        let data = await Note.findAll({ where: {description: sss } })
        return data
    }
   


}
export default NoteService