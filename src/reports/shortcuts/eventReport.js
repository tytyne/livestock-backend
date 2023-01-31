
import EventService from "../../services/event.service";
const{dueDateEvent}=EventService

export default class EventReport{

    static async getDueDate(req,res,next){
        try{
            const data = await dueDateEvent()
            res.status(200).json({message:"All Due event",data})

        }
        catch(e){
            return next(new Error(e))
        }

    }

   

}