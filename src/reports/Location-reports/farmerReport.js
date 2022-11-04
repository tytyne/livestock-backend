
import FarmerService from "../../services/farmer.service"
const{createFarmer,getFarmerById,getAllFarmers,updateById,deleteById,countFarmers,farmerGroupByDistrictReports}=FarmerService

export default class FarmerReport{
//farmer by district 
static async farmersReports(req,res,next){
    try {
        const data = await farmerGroupByDistrictReports();
      
        res.status(200).json({ message: "All animals", data });
      } catch (e) {
        return next(new Error(e));
      }

}

}