import AnimalVaccinationService from "../services/vaccination.services"
const{getAllVaccinations,getVaccinationById}=AnimalVaccinationService

export default class VaccinationController{


//get a vaccination by Id

static async getVaccination(req,res,next){
    try{
        const id=req.params.id
        const data = await getVaccinationById(id)
        res.status(200).json({message:"get Animal Vaccination",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all vaccinations

static async getVaccinations(req,res,next){
    try{
        const data = await getAllVaccinations()
        res.status(200).json({message:"All Animal Vaccinations",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}

}