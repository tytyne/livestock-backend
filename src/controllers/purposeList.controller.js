import purposeListService from "../services/purposeList.service"
const{getAllPurposeLists,getPurposeListById}=purposeListService

export default class PurposeListController{


//get a purposeList by Id
static async getpurposeList(req,res,next){
    try{
        const id=req.params.id
        const data = await getPurposeListById(id)
        res.status(200).json({message:"get purposeList by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all purposeLists
static async getpurposeLists(req,res,next){
    try{
        const data = await getAllPurposeLists()
        res.status(200).json({message:"All purposeLists",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}

}