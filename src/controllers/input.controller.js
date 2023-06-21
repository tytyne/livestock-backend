import InputService from "../services/input.service"
import AnimalService from "../services/animal.service";
const{createInput,getInputById,getAllInputsAnimal,getAllInputsGroup,updateInputById,deleteInputById}=InputService
const {getAnimalById} = AnimalService
import GroupAnimalService from "../services/groupAnimal.service";
const {getGroupAnimalById} = GroupAnimalService;
const { v4: uuidv4 } = require('uuid');

export default class InputController{
//save Input
static async storeInput(req,res,next){
    try{
        const formData = req.body;
        const {resource_name,resource_id,farmId}= req.params
        let bunchInput;
        formData.id = uuidv4()
        formData.createdBy = req.user.id;
        formData.farm_id = farmId;
        if(resource_name==='livestock_group'){
          const checking = await getGroupAnimalById(resource_id)
          // console.log("check farm_id",checking)
          const hello=checking.dataValues.farm_id
         
          formData.groupId= resource_id
          const data = await createInput(formData);
    
          const allAnimals=checking.dataValues.records
          const response = allAnimals.map(s=>s.id)
          
          if(formData.per_head){
            //means i have to divide
            for (let i = 0; i < response.length; i++) {
              bunchInput={
                "id":uuidv4(),
                "amount":`${formData.amount}/${response.length}`,
                "unit": `${formData.unit}/${response.length}`,
                "type": `${formData.type}`,
                "date": `${formData.date}`,
                "cost":`${formData.cost}/${response.length}`,
                "description":`${formData.description}`,
                "animalId":response[i]
                
            }
            await createInput(bunchInput);
              
              return res.status(200).json({message:"hello sweetie!"})
            }
    
          }else{
            //send as it is 
            
            for (let i = 0; i < response.length; i++) {
              bunchInput={
                "id":uuidv4(),
                "amount":`${formData.amount}`,
                "unit": `${formData.unit}`,
                "type": `${formData.type}`,
                "date": `${formData.date}`,
                "cost":`${formData.cost}`,
                "description":`${formData.description}`,
                "animalId":response[i]
                  
              }
              await createInput(bunchInput);
          
            }
        
            return res.status(200).json({message:"Input created!",data})
        
          }
    
        }
    
        if(resource_name==='animal'){
          const checking = await getAnimalById(resource_id)
          // console.log("check farm_id",checking)
          const hello =checking.dataValues.farm_id
          formData.animalId= resource_id
          const data = await createInput(formData);
          if(formData.record_transaction === true){
            await createTransaction({
              id:uuidv4(),
              type: "expense",
              amount:`${formData.cost}`,
              date: `${formData.date}`,
              vendor: " ",
              category:`Veterinary, breeding, and medicine`,
              check_number:"",
              ref_Id: `${resource_id}`,
              farm_id:`${hello}`,
              ref_type: `${resource_name}`,
              reporting_year:new Date().getFullYear(),
              keywords: "",
              description: `${formData.description}`
        
            })
          }
    
        res.status(200).json({message:"Input created!",data})
        }
      
        await createEvent({
          id:uuidv4(),
          title: `treat ${resource_id}`,
          description: `${formData.type}`,
          start_time: `${formData.date}`,
          end_time: `${formData.retreat_date}`,
          assigned_to_id: `${req.user.id}`,
          animal_id:`${resource_id}`
    
        })
    
    
    }
    catch (e) {
        return next(new Error(e));
      }
}

//get a Input by Id
static async getTreatment(req,res,next){
    try{
      const {resource_name,resource_id,farmId}= req.params
        const id=req.params.id
        const data = await getInputById(id)
        res.status(200).json({message:"get Input by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all Input
static async getInputs(req,res,next){
    try{
      const {resource_name,resource_id,farmId}= req.params
        if(resource_name==="animal"){
          const data = await getAllInputsAnimal(resource_id);
          return res.status(200).json({ message: "All Inputs", data });
        }
        else if(resource_name==="livestock_group"){
          const data = await getAllInputsGroup(resource_id);
          return res.status(200).json({ message: "All Inputs", data });
        }
    }
    catch (e) {
        return next(new Error(e));
      }
}

// update Input
static async updateInput(req,res,next){
    try{
      const {resource_name,resource_id,farmId}= req.params
        const id=req.params.id
        const formData = req.body
        const dbResponse = await updateInputById(formData,id)
        res.status(200).json({message:"update a Input!!",dbResponse})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete Input

static async deleteInput(req,res,next){
    try{
        const {resource_name,resource_id,farmId}= req.params
        const id=req.params.id
        const data = await deleteInputById(id)
        res.status(200).json({message:"Input deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
}