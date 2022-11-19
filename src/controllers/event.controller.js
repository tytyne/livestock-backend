import moment from "moment"
import EventService from "../services/event.service"
import UserService from "../services/user.service"
const{getUserByIdOrEmail}=UserService
const{createEvent,updateEventById,getAllEvents,deleteEventById,getEventById}=EventService

export default class EventController{
    // store Event
    static async storeEvent(req,res,next){
       try{

        const {resource_name,resource_id}= req.params
        const formData = req.body;
        formData.created_by_id = req.user.id;
        const name = await getUserByIdOrEmail(req.user.id)
        formData.created_by= `${name.dataValues.firstname} ${name.dataValues.lastname}`
        if(resource_name==="animal"){
          formData.animal_id= resource_id
        }
        else if(resource_name==="animal_group"){
          formData.group_id= resource_id
        }
        const textStart=formData.start_time
        const textEnd = formData.end_time
        formData.start_time = moment(textStart).format("YYYY-MM-DD HH:mm:ss")
        formData.end_time = moment(textEnd).format("YYYY-MM-DD HH:mm:ss")
        formData.userId=req.user.id
        const data = await createEvent(formData)
        return  res.status(200).json({message:"task created",data})
       }
       catch (e) {
        return next(new Error(e));
    }


}
    //get all events
    static async getEvents(req,res,next){
        try{
            const data = await getAllEvents(req.user.id)
            return  res.status(200).json({message:"get all events",data})
        }
        catch (e) {
         return next(new Error(e));
     }
    }
    //get event by Id
    static async getEvent(req,res,next){
        try{
            const id=req.params.id
            const data = await getEventById(id)
            return  res.status(200).json({message:"get event by Id",data})
        }
        catch (e) {
         return next(new Error(e));
     }
    }

    //update event by Id

    static async updateEvent(req,res,next){
        try{
            const id = req.params.id
            const formData = req.body
            const textStart=formData.start
            const textEnd = formData.end
            formData.start = moment(textStart).format("YYYY-MM-DD HH:mm:ss")
            formData.end = moment(textEnd).format("YYYY-MM-DD HH:mm:ss")
            const data = await updateEventById(formData,id)
            return  res.status(200).json({message:"event updated",data})
        }
        catch (e) {
         return next(new Error(e));
     }
    }
    //delete event by Id

    static async deleteEvent(req,res,next){
        try{
            const id=req.params.id
              await deleteEventById(id)
            return  res.status(200).json({message:"delete event"})
        }
        catch (e) {
         return next(new Error(e));
     }
    }


}