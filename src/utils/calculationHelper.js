import moment from "moment"

class CalculationHelper {

    static async calculatePrice(actual_price, new_unit, actual_unit) {

        const cost = parseInt((actual_price * new_unit) / actual_unit);

        return cost;

    }
    static async calculateDays(birthdate) {

        const data = moment().diff(birthdate, 'days', false);
        return data

    }

    static async calculateWeeks(birthdate) {

        const data = moment().diff(birthdate,'weeks', false);
        return data
    }

    static async calculateMonths(borndate) {
        const data = moment().diff(borndate, 'months', false);
        return data
    }
    static async calculateYears(borndate) {
        const data = moment().diff(borndate, 'years', false);
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
      



}
export default CalculationHelper