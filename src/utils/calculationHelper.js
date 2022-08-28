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



}
export default CalculationHelper