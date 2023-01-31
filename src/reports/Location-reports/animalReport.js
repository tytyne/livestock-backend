
import AnimalService from "../../services/animal.service";
const {
 
  getAllanimalss,getAllAnimalReports
 
} = AnimalService;


export default class AnimalReport{

    static async animalsReports(req,res,next){
        try {
            const data = await getAllAnimalReports();
            
            var result = data.map(animal => ({ id: animal.id, 
              earring_num: animal.earring_num,
              status: animal.status, 
              sex: animal.sex,
              farm_name: animal.farm.name,
              farmer_firstname:animal.farm.farmer.firstname,
              farmer_lastname:animal.farm.farmer.lastname,
              // purposeList_name:animal.purposeList.name,
              // animalCategory:animal.animalCategory.name
            
            
            
            
            }));


            
            res.status(200).json({ message: "All animals", result });
          } catch (e) {
            return next(new Error(e));
          }

    }

  


}
