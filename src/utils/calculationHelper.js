import moment from "moment"

class CalculationHelper {

    static async calculatePrice(actual_price, new_unit, actual_unit) {

        const cost = parseInt((actual_price * new_unit) / actual_unit);

        return cost;

    }

    static async gettingAge(birthdate){

        const data = moment().diff(birthdate, 'months', true);
                
        return data

    }

    
    static async getDatesInRange(startDate, endDate) {
        const date = new Date(startDate.getTime());
      
        const dates = [];
      
        while (date <= endDate) {
          dates.push(new Date(date));
          date.setDate(date.getDate() + 1);
        }
      
        return dates;
      }
      
    static async electronicId (earring){

        const randomNumber = Math.floor(Math.random() * 16) + 23
        const data = 'RWA-'.concat(randomNumber).concat(`-`).concat(earring);
        return data
      
      }
      


}
export default CalculationHelper