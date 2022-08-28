import FeedService from "../services/feed.service"
const{getAllFeeds,getFeedById}=FeedService

export default class FeedController{


//get a feed by Id
static async getFeedList(req,res,next){
    try{
        const id=req.params.id
        const data = await getFeedById(id)
        res.status(200).json({message:"get Feed by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all feeds
static async getFeedLists(req,res,next){
    try{
        const data = await getAllFeeds()
        res.status(200).json({message:"All feeds",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}

}