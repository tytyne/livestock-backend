import NoteService from "../services/note.service"
const{createNote,getNoteById,getAllNotes,updateNoteById,deleteNoteById}=NoteService
import EventService from "../services/event.service";
const { createEvent } = EventService
import ActivityService from "../services/activity.service";
const{createActivity}=ActivityService
const { v4: uuidv4 } = require('uuid');


export default class NoteController{
//save Note
static async storeNote(req,res,next){
try{
    const formData = req.body;
    const {resource_name,resource_id}= req.params
    formData.id = uuidv4()
    formData.createdBy = req.user.id;
    if(resource_name==="animal"){
      formData.animalId= resource_id
      if(formData.add_to_calendar){
        await createEvent({
          id:uuidv4(),
          title: `${formData.keywords}`,
          description: `${formData.description}`,
          start_time: `${formData.date}`,
          assigned_to_id: `${req.user.id}`,
          reference_id:`${resource_id}`,
    
        })
      }
      
    }
    else if(resource_name==="livestock_group"){
      formData.groupAnimalId= resource_id
    }
    const data = await createNote(formData)
    
      await createActivity({
        id:uuidv4(),
        category: `note`,
        description: `${formData.description}`,
        date: `${formData.date}`,
        ref_id:`${resource_id}`,
      })
    
   
 

    res.status(200).json({message:"Note created!",data})
}
catch (e) {
    return next(new Error(e));
  }
}

//get a Note by Id
static async getNote(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const data = await getNoteById(id)
        res.status(200).json({message:"get Note by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all Note
static async getNotes(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const data = await getAllNotes(resource_id)
        res.status(200).json({message:"All Notes",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
// update Note
static async updateNote(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const formData = req.body
        const dbResponse = await updateNoteById(formData,id)
        res.status(200).json({message:"update a Note!!",dbResponse})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete Note

static async deleteNote(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const data = await deleteNoteById(id)
        res.status(200).json({message:"Note deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
}