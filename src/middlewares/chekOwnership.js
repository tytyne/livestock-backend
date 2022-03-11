
import FarmerService from "../services/farmer.service"
import AnimalService from "../services/animal.service"
import OperationService from "../services/operation.service";
const{getFarmerById}=FarmerService
const {getAnimalById}=AnimalService
const {getOperationById}=OperationService

const checkFarmerOwner= async (req,res,next)=>{
    const farmer = await getFarmerById(req.params.id)
    if (farmer.user_id!=req.user.id)
    {
        return res.status(403).json({message:"you are not allowed to see this"})
    }
    
    return next();
};
const checkAnimalOwner= async (req,res,next)=>{
    const animal = await getAnimalById(req.params.id)
    if (animal.user_id!=req.user.id)
    {
        return res.status(403).json({message:"you are not allowed to see this"})
    }
    
    return next();
    

}
const checkOperationOwner= async (req,res,next)=>{
    const operation = await getOperationById(req.params.id)
    if (operation.user_id!=req.user.id)
    {
        return res.status(403).json({message:"you are not allowed to see this"})
    }
    
    return next();
    

}

export default{checkFarmerOwner,checkAnimalOwner,checkOperationOwner}