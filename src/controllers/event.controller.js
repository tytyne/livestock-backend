import moment from "moment"
import EventService from "../services/event.service"
const{createEvent,updateEventById,getAllEvents,deleteEventById,getEventById}=EventService

export default class EventController{
    // store Event
    static async storeEvent(req,res,next){
       try{
        const formData = req.body;
        const textStart=formData.start
        const textEnd = formData.end
        formData.start = moment(textStart).format()
        formData.end = moment(textEnd).format()
        console.log("check formdata",formData)
        const data = await createEvent(formData)
        return  res.status(200).json({message:"event created",data})
       }
       catch (e) {
        return next(new Error(e));
    }


}
    //get all events
    static async getEvents(req,res,next){
        try{
            const data = await getAllEvents()
            console.log(data)
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
            formData.start = moment(textStart).format()
            formData.end = moment(textEnd).format()
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