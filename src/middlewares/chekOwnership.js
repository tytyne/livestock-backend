
import FarmerService from "../services/farmer.service"
import FarmService from "../services/farm.service"
import EventService from "../services/event.service";
import AnimalService from "../services/animal.service"
import { response } from "express";
const { getFarmerById } = FarmerService
const { getAnimalById } = AnimalService
const { getFarmById, getAllFarms } = FarmService
const { getEventById,getAllEvents} = EventService

const checkFarmerOwner = async (req, res, next) => {
        const farmer = await getFarmerById(req.params.id)

        if (farmer == null) {
            return res.status(401).json({ message: "This do not exist" })
        }
        else if (farmer.createdBy != req.user.id) {
            return res.status(403).json({ message: "you are not allowed to see this" })
        }

        return next();
    };


    const checkFarmOwner = async (req, res, next) => {
        const farm = await getFarmById(req.params.id)
        console.log("check farm id", farm.dataValues.id)
        console.log("check user id", req.user)

        if (farm == null) {
            return res.status(401).json({ message: "This do not exist" })
        }
        else if (farm.dataValues.createdBy === req.user.id) {
            next()
        }
        else if (farm.dataValues.id === req.user.assignedTo) {
            next()
        }

        else {

            return res.status(403).json({ message: "you are not allowed to see this" })
        }

    };

    const scopedFarmsOwner = async (req, res, next) => {

        const farms = await getAllFarms()
        const data = farms.filter(farm => farm.createdBy === req.user.id || farm.id === req.user.assignedTo)
        if (data) {
            return res.status(200).json({ message: "all farms", data })
        }

    };

    const checkEventOwner = async (req, res, next) => {
        const event = await getEventById(req.params.id)

        if (event == null) {
            return res.status(401).json({ message: "This do not exist" })
        }
        
        else if (event.dataValues.createdBy === req.user.id) {
            next()
        }
        
        else {

            return res.status(403).json({ message: "you are not allowed to see this" })
        }
    };

    const scopedEventOwner = async (req, res, next) => {
        const events = await getAllEvents()
        const data = events.filter(event => event.createdBy === req.user.id||event.assigned_to_id === req.user.id)
        if (data) {
            return res.status(200).json({ message: "agenda", data })
        }
    };



    const checkAnimalOwner = async (req, res, next) => {
        const animal = await getAnimalById(req.params.id)

        if (animal == null) {
            return res.status(401).json({ message: "This do not exist" })
        }
        else if (animal.createdBy != req.user.id) {
            return res.status(403).json({ message: "you are not allowed to see this" })
        }

        return next();


    }



export default {checkFarmerOwner, checkAnimalOwner, checkFarmOwner, checkEventOwner, scopedFarmsOwner,scopedEventOwner}