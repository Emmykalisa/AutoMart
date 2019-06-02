import uuid from 'uuid';

class User {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.users = [
      {
        "id": "c2097163-7122-4ba3-8792-79bd13bb906f",
        "email": "emmykalisa8@gmail.com",
        "firstName": "Emmy",
        "lastName": "KALISA",
        "password": "kalisa",
        "address": "kacyiru",
        "is_admin": "true"

    }
    ];
  }
  /**
   * 
   * @returns {object} user object
   */
  create(data) {
    const newUser = {
      id: uuid.v4(),
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      address: data.address,
      is_admin: data.is_admin
    };
    this.users.push(newUser);
    return newUser
  }
  /**
   * @returns {object} returns all users
   */
  findAll() {
    return this.users;
  }
}
export default new User();