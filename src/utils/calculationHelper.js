const calculatePrice =async(actual_price,actual_unit,new_unit)=>{

    const cost = (actual_price* new_unit)/actual_unit;

    return cost;

}

export default calculatePrice