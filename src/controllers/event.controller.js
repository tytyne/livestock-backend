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
        formData.start = moment(textStart).toDate()
        FormData.end = moment(textEnd).toDate()
        console.log("check formdata",formData)
        return  res.status(200).json({message:"create event"})
       }
       catch (e) {
        return next(new Error(e));
    }


}


    //get all events
    static async getEvents(req,res,next){
        try{
            return  res.status(200).json({message:"get all events"})
        }
        catch (e) {
         return next(new Error(e));
     }
    }
    //get event by Id
    static async getEvent(req,res,next){
        try{
            return  res.status(200).json({message:"get event by Id"})
        }
        catch (e) {
         return next(new Error(e));
     }
    }

    //update event by Id

    static async updateEvent(req,res,next){
        try{
            return  res.status(200).json({message:"update event"})
        }
        catch (e) {
         return next(new Error(e));
     }
    }
    //delete event by Id

    static async deleteEvent(req,res,next){
        try{
            return  res.status(200).json({message:"delete event"})
        }
        catch (e) {
         return next(new Error(e));
     }
    }


}