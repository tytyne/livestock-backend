
import AnimalService from "../../services/animal.service";
const {
 
  getAllanimalss,getAllAnimalReports
 
} = AnimalService;


export default class AnimalReport{

    static async animalsReports(req,res,next){
        try {
            const data = await getAllAnimalReports();
            console.log(data.earring_num)
            res.status(200).json({ message: "All animals", data });
          } catch (e) {
            return next(new Error(e));
          }

    }

  //   static async animalsReports(req,res,next){
  //     try {
  //         const data = await getAllanimalss();
  //         res.status(200).json({ message: "All animals", data });
  //       } catch (e) {
  //         return next(new Error(e));
  //   }

  // }


}
