import TreatmentService from "../../services/treatment.service"
const{upcomingTreatments,AllTreatmentsReports,TreatmentTypes,allTreatments}=TreatmentService
import AnimalService from "../../services/animal.service"
const {getAnimalById,getAllanimals} = AnimalService
import moment from "moment"

export default class TreatmentReport{
   
//upcomming treatments

static async holla(req,res,next){
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

static async getUpcommingTreatments(req,res,next){
  try{

   
      let {startDate,endDate}=req.query
      // startDate = moment().format("YYYY-MM-DD")
      // endDate = moment(startDate).add(3, 'M').format("YYYY-MM-DD");

      const data = await allTreatments(startDate,endDate)
      const data_result = data.map(treatment => ({ id: treatment.id, 
       
        name:treatment.animal.name,
        // type:treatment.animal,
        breed:treatment.animal.breed,
        tag:treatment.animal.tag,
        treatment_type:treatment.type,
        mode:treatment.mode,
        Description:treatment.description,
        Site:treatment.site,
        Batch:treatment.batch,
        date:treatment.date
      }))
      const graph = await TreatmentTypes()
      const result={data_result,graph}


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




























