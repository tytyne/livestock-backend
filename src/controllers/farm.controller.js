import FarmService from "../services/farm.service";
const {
  createFarm,
  getFarmById,
  getAllFarms,
  updateFarmById,
  deleteFarmById,
  countFarms,
} = FarmService;

export default class FarmController {
  //save a farm
  static async storeFarm(req, res, next) {
    try {
      const formData = req.body;
      formData.createdBy = req.user.id;
      console.log(formData);
      // console.log("check formdata",formData)
      const data = await createFarm(formData);
      // console.log("check data",data)
      console.log("check data", data.name);
      res.status(200).json({ message: "a farm created!", data });
    } catch (e) {
      return next(new Error(e));
    }
  }

  //get a farm by Id
  static async getFarm(req, res, next) {
    try {
      const id = req.params.id;
      const data = await getFarmById(id);
      res.status(200).json({ message: "get farm by Id", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  //get all farms
  static async getFarms(req, res, next) {
    try {
      const data = await getAllFarms(req.user.id);
      res.status(200).json({ message: "All farms", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  // update a farm
  static async updateFarm(req, res, next) {
    try {
      const id = req.params.id;
      const formData = req.body;
      const data = await updateFarmById(formData, id);
      res.status(200).json({ message: "update a farm!!", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  //delete a farm

  static async deleteFarm(req, res, next) {
    try {
      const id = req.params.id;
      const data = await deleteFarmById(id);
      res.status(200).json({ message: "delete a farm" });
    } catch (e) {
      return next(new Error(e));
    }
  }
  static async countingFarms(req, res, next) {
    try {
      const data = await countFarms();
      console.log(data);
      res.status(200).json({ message: "number of farms", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
}
