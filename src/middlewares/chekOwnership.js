
import FarmerService from "../services/farmer.service"
import FarmService from "../services/farm.service"
import EventService from "../services/event.service";
import AnimalService from "../services/animal.service"
const{getFarmerById}=FarmerService
const {getAnimalById}=AnimalService
const {getFarmById}=FarmService
const {getEventById}=EventService

const checkFarmerOwner= async (req,res,next)=>{
    const farmer = await getFarmerById(req.params.id)
    
    if(farmer==null){
        return res.status(401).json({message:"This do not exist"})
    }
    else if (farmer.createdBy!=req.user.id)
    {
        return res.status(403).json({message:"you are not allowed to see this"})
    }
    
    return next();
};
const checkFarmOwner= async (req,res,next)=>{
    const farm = await getFarmById(req.params.id)
   
    if(farm==null){
        return res.status(401).json({message:"This do not exist"})
    }
    else if (farm.createdBy!=req.user.id)
    {
        return res.status(403).json({message:"you are not allowed to see this"})
    }
    
    return next();
};
const checkAnimalOwner= async (req,res,next)=>{
    const animal = await getAnimalById(req.params.id)
   
    if(animal ==null){
        return res.status(401).json({message:"This do not exist"})
    }
    else if (animal.createdBy!=req.user.id)
    {
        return res.status(403).json({message:"you are not allowed to see this"})
    }
    
    return next();
    

}


const checkEventOwner= async (req,res,next)=>{
    const event = await getEventById(req.params.id)
   
    if(event==null){
        return res.status(401).json({message:"This do not exist"})
    }
    else if (event.userId!=req.user.id)
    {
        return res.status(403).json({message:"you are not allowed to see this"})
    }
    
    return next();
};


export default{checkFarmerOwner,checkAnimalOwner,checkFarmOwner,checkEventOwner}