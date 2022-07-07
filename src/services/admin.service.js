import models from "../database/models/index.js";
import "regenerator-runtime/runtime";

const { Admin } = models;

/**
 * @description This service deals with the Admin model
 */
export default class AdminServices {
/**
   * @description this service create a new Admin in the db
   * @param {object} Admin
   * @return {object} return the created Admin
   */
  static async createAdmin(admin) {
    const admins = await Admin.create(admin);
    const { password, ...result } = admins.dataValues;
    return result;
  }

  /**
   * @description this service create a new Admin in the db
   * @param {object} value
   * @return {object} return object if found
   */
  static async getAdminByIdOrEmail(value) {
    let admin;
    if (typeof value === "string") {
      admin = await Admin.findOne({ where: { email: value } });
      return admin;
    }
    return await Admin.findOne({ where: { id: value } });
  }
  static async checkAdminname(value) {
    let admin;
      admin = await Admin.findOne({ where: {Adminname: value } });
      return admin; 
  }


  static async updateAdmin(decoded){
    const admins = await Admin.update({isVerified:true}, {
      where: { id: decoded.id },
      returning: true,
      plain: true,
      })
    return admins
  }

  static async upDateAdminInfo(updates, id) {
    let userNameCheck, colsAffected;
    if (updates.username) {
      userNameCheck = await Admin.findAll({
        where: { username: updates.username },
      });
    }

    if (
        userNameCheck == undefined
      || userNameCheck.length == 0
      || (userNameCheck.length == 1 && userNameCheck[0].id == id)
    ) {
      colsAffected = await Admin.update(updates, {
        where: { id },
        attributes: { exclude: "email" },
      });
      if (colsAffected[0] != 0) {
        return true;
      }
      return false;
    }
    return "username has been taken";
  }



















  static async updatePassword(hash, decoded) {
    const Admins = await Admin.update(
      { password: hash },
      {
        where: { email: decoded.email },
        returning: true,
        plain: true,
      }
    );
    return Admins;
  }


  static async changingPassword(hash,id){
    const Admins = await Admin.update(
      { password: hash },
      {
        where: { id:id },
      returning: true,
      plain: true,
      }
  );
    return Admins
  }
  static async getAdminByEmail(value) {
    let Admins;
        Admins = await Admin.findOne({ where: { email: value }});

      return Admins;
    }
}