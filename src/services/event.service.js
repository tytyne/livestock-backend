import models from "../database/models/index"
const {Event}=models

import moment from "moment"
const { Op } = require("sequelize");

var a = moment();
const today = moment(a.toISOString()).format("YYY-MM-DD HH:MM");
console.log("check today today today",today)


/**
 * @description This model deals with Event model
 */

class EventService{
    static async createEvent(value){

        let event= await Event.create(value)
        return event
    }
    static async getAllEvents(){
        let event = await Event.findAll()
        return event
    }

    static async getAllEventsWithReference(animal_id){
        let event = await Event.findAll({where:{reference_id:animal_id}})
        return event
    }
    static async getEventById(id){
        let event = await Event.findOne({where:{id:id}})
        return event
    }

    static async updateEventById(value,id){
        let event = await Event.update(value,{where:{id:id},returning: true,
            plain: true,}) 
        return event

    }
    static async deleteEventById(id){
        let event = await Event.destroy({where:{id:id}})
        return event
    }

    static async dueDateEvent(){

        // let event = await Event.findAll()
        let event = await Event.findAll({
            where: {
                start_time: { 
                    [Op.gte]: moment().subtract(7, 'days').toDate()
                }
            }
          })
        return event
    }
    static async searchEvents(sss){
        let data = await Event.findAll({
          where:{
            title: { [Op.like]: `%${sss}%` },
         }
          
        })
        return data
    }

    static async makeEventComplete(id) {
        const event = await Event.update(
          {status: 'complete' },
          {
            where: {id:id},
            returning: true,
            plain: true,
          }
        );
        return event;
    }

    static async eventsByStatusWithRessource(animal_id){
        let data = await Event.findAll({
                    where:{reference_id:animal_id},
                group: [,'status']
            })
        return data
    }

    static async eventsByStatus(){
        let data = await Event.findAll({
            group: ['id','status']
          
        })
        return data
    }


}

export default EventService


// let farm = await Transaction.findAll({ 
//     where: {farm_id:farm_id,type:'expense'},
//     group: ['category','type'],