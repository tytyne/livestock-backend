
import FarmerService from "../services/farmer.service"
import FarmService from "../services/farm.service"
import EventService from "../services/event.service";
import AnimalService from "../services/animal.service"
const{getFarmerById}=FarmerService
const {getAnimalById}=AnimalService
const {getFarmById,getAllFarms}=FarmService
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
        console.log("check farm id",farm.dataValues.id)
        console.log("check user id",req.user)
        
        if(farm==null){
            return res.status(401).json({message:"This do not exist"})
        }
        else if (farm.dataValues.createdBy===req.user.id)
        {
            next()
        }
        else if (farm.dataValues.id===req.user.assignedTo)
        {
           next()
        }
       
        else{

            return res.status(403).json({message:"you are not allowed to see this"})
        }
        
    };

    const scopedFarmsOwner= async (req,res)=>{
        
        const farms =  await getAllFarms()
        console.log("check user",req.user.id)
        const data=farms.filter(farm => farm.createdBy === req.user.id)
        const dataAssigned=farms.filter(farm => farm.id === req.user.assignedTo)
        console.log("data assigned to ",dataAssigned)

        if(data){
            return res.status(200).json({message:"all farms",data})
        }  
        // else 
        // if(dataAssigned){
        //     return res.status(200).json({message:"all farms",dataAssigned})
        // }

          
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


export default{checkFarmerOwner,checkAnimalOwner,checkFarmOwner,checkEventOwner,scopedFarmsOwner}