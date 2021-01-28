import models from "../database/models/index.js";

const { User } = models;

/**
 * @class AuthServices
 * @classdesc this service deals with social auth
 */
export default class AuthServices {
  /**
   * @param {object} userData contains user profile data
   * @return {object} returns data from database
   */
  static async getOrCreateUser(userData) {
    try {
        console.log(userData)
      return await User.findOrCreate({
        where: { email: userData.email, provider: userData.provider },
        defaults: userData,
      });
    } catch (error) {
      throw error;
    }
  }
}