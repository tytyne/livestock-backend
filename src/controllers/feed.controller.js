import FeedService from "../services/feed.service"
const{createFeed,getFeedById,getAllFeed,updateById,deleteById}=FeedService

export default class FeedController{
//save feed
static async storeFeed(req,res,next){
try{
    const formData = req.body;
    const data = createFeed(formData)
    console.log("check data",data)
    res.status(200).json({message:"Feed created!",data})
}
catch (e) {
    return next(new Error(e));
  }
}

//get a feed by Id
static async getFeed(req,res,next){
    try{
        const id=req.params.id
        const data = await getFeedById(id)
        res.status(200).json({message:"get feed by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all feed
static async getFeeds(req,res,next){
    try{
        const data = await getAllFeed()
        res.status(200).json({message:"All Feed",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
// update feed
static async updateFeed(req,res,next){
    try{
        const id=req.params.id
        const formData = req.body
        const dbResponse = await updateById(formData,id)
        res.status(200).json({message:"update a feed!!",dbResponse})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete feed

static async deleteFeed(req,res,next){
    try{
        const id=req.params.id
        const data = await deleteById(id)
        res.status(200).json({message:"feed deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
}