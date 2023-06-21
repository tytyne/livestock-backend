
const { v4: uuidv4 } = require('uuid');
import ActivityService from "../services/activity.service"
const {createActivity,getActivityById,getAllActivities,getAllActivitiesByAnimal} = ActivityService

export default class ActivityController{


    //save Activity
static async storeActivity(req,res,next){
    try{
        const {resource_name,resource_id,farmId}= req.params
        const formData = req.body;
        formData.id = uuidv4()
        formData.createdBy = req.user.id;
        formData.farm_id=farmId;
        console.log("data",formData)
        formData.ref_id=resource_id
        const data = await createActivity(formData)
        res.status(200).json({message:"Activity created!",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}

//get an activity by Id
static async getActivity(req,res,next){
    try{
        const {resource_name,resource_id,farmId}= req.params
        formData.id = uuidv4()
        const id=req.params.id
        const data = await getActivityById(id)
        res.status(200).json({message:"get Activity by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all activities
static async getActivities(req,res,next){
    try{
        const {resource_name,resource_id,farmId}= req.params
        const data = await getAllActivitiesByAnimal(resource_id)
        res.status(200).json({message:"All Activities",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
// // update Transaction
// static async updateActivity(req,res,next){
//     try{
//         const {resource_name,resource_id,farmId}= req.params
//         const id=req.params.id
//         const formData = req.body
//         const dbResponse = await updateTransactionById(formData,id)
//         res.status(200).json({message:"update an activity!!",dbResponse})
      
//     }
//     catch (e) {
//         return next(new Error(e));
//       }
// }
//delete Activity

// static async deleteActivity(req,res,next){
//     try{
//         const {resource_name,resource_id,farmId}= req.params
//         const id=req.params.id
//         const data = await deleteTransactionById(id)
//         res.status(200).json({message:" activity deleted succesfully!"})
//     }
//     catch (e) {
//         return next(new Error(e));
//       }
// }
}