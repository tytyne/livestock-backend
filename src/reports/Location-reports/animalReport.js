
import AnimalService from "../../services/animal.service";
const {
 
  getAllanimalss,getAllAnimalReports
 
} = AnimalService;


export default class AnimalReport{

    static async animalsReports(req,res,next){
        try {
            const data = await getAllAnimalReports();
            const hihi= data[0].dataValues
  
            console.log(hihi)
            const animal={
              "earring_num ": hihi.earring_num,
              "status": hihi.status,
              "sex":hihi.gender,
              "ageInDays":hihi.ageInDays,
              "farm_name":hihi.farm.farm_name,
              "farmer_firstname":hihi.farm.farmer.firstname,
              "farmer_lastname":hihi.farm.farmer.lastname,
              "purposeList_name":hihi.purposeList.name,
              "animalCategory":hihi.animalCategory.name
  
            }
            // console.log(holla)
              


            
            res.status(200).json({ message: "All animals", animal });
          } catch (e) {
            return next(new Error(e));
          }

    }

  


}
