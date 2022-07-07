
class CalculationHelper{

static  async calculatePrice (actual_price,actual_unit,new_unit){

    const cost =  parseInt((actual_price* new_unit)/actual_unit);

    return cost;

}


}
export default CalculationHelper