import contactService from "../services/contact.service"
const{getAllContacts,getCreateContact,getcontactById}=contactService

export default class ContactController{


//create contact 

static async storecontact(req,res,next){
    try{
        const formData = req.body;
        const data = await getCreateContact(formData)
        res.status(200).json({message:"get contact by Id",data})
    }
    catch (e) {
        return next(new Error(e));
        }
}

//get a contact by Id
static async getcontact(req,res,next){
    try{
        const id=req.params.id
        const data = await getcontactById(id)
        res.status(200).json({message:"get contact by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all contacts
static async getContacts(req,res,next){
    try{
        const data = await getAllContacts()
        res.status(200).json({message:"All contacts",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}



}