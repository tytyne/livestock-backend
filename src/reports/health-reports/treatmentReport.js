import TreatmentService from "../../services/treatment.service"
const{upcomingTreatments,AllTreatmentsReports,TreatmentTypes}=TreatmentService
import AnimalService from "../../services/animal.service"
const {getAnimalById,getAllanimals} = AnimalService

export default class TreatmentReport{
   
//upcomming treatments

static async getUpcommingTreatments(req,res,next){
    try{
  
      const {start_date,end_date}=req.query
      const data = await upcomingTreatments(start_date,end_date)
      return res.status(200).json({message:"upcomming treatmentssss",data})
  
    }
    catch(e){
      return next(new Error(e))
    }
}
//get all Treatments

static async holla(req,res,next){
  try{
      const data = await AllTreatmentsReports()
      // const dataa = await getAllanimals()

      // const resuly = data.map(treatment => ({ id: treatment.id, 
       
      //   name:treatment.animal.name,
      //   // type:treatment.animal
      //   breed:treatment.animal.breed,
      //   tag:treatment.animal.tag,
      //   treatment_type:treatment.type,
      //   mode:treatment.mode,
      //   Description:treatment.description,
      //   Site:treatment.site,
      //   Batch:treatment.batch,
      //   date:treatment.date
      // }))
      const graph = await TreatmentTypes()
      const result={...data,graph}


      return res.status(200).json({message:"All Treatments Reports",result})
  }
  catch (e) {
      return next(new Error(e));
    }
}


static async getTreatmentsType(req,res,next){

  try{

    const data = await TreatmentTypes()

    return res.status(200).json({message:"All Treatments Graph",data})
  }
  catch (e) {
      return next(new Error(e));
    }

  }




}




























