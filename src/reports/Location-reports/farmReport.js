import FarmService from "../../services/farm.service";
const {
  createFarm,
  getFarmById,
  getAllFarms,
  updateFarmById,
  deleteFarmById,
  countFarms,
  getAllFarmReports
  
} = FarmService;

export default class FarmReport {

    static async farmsReports(req,res,next){
        try {
            const data = await getAllFarmReports(req.user.id);
            res.status(200).json({ message: "All animals", data });
          } catch (e) {
            return next(new Error(e));
          }

    }
}