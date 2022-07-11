import ItemService from "../services/item.service"
const{createItem,getItemById,getAllItems,updateItemById,deleteItemById}=ItemService

export default class ItemController{
//save item
static async storeItem(req,res,next){
try{
    const formData = req.body;
    const data = await createItem(formData)
    res.status(200).json({message:"item created!",data})
}
catch (e) {
    return next(new Error(e));
  }
}

//get a item by Id
static async getItem(req,res,next){
    try{
        const id=req.params.id
        const data = await getItemById(id)
        res.status(200).json({message:"get item by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all item
static async getItems(req,res,next){
    try{
        const data = await getAllItems()
        res.status(200).json({message:"All items",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
// update item
static async updateItem(req,res,next){
    try{
        const id=req.params.id
        const formData = req.body
        const dbResponse = await updateItemById(formData,id)
        res.status(200).json({message:"update a item!!",dbResponse})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete item

static async deleteItem(req,res,next){
    try{
        const id=req.params.id
        const data = await deleteItemById(id)
        res.status(200).json({message:"item deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
}