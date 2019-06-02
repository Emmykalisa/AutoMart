import UserModel from '../models/User';

const User = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object 
   */
  create(req, res) {
    const user = UserModel.create(req.body);
    // return res.status(201).send(user);
    return res.status(200).json({status:200,message:'User created',data:user});
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} users array
   */
  getAll(req, res) {
    const users = UserModel.findAll();
    // return res.status(200).send(users);
    return res.status(200).json({status:200,message:'List of all users',data:users});
  }
}

export default User;