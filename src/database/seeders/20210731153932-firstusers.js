'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Pedro",
          lastName: "Gonzalez Chavez",
          email: "pedrogonza_el22@hotmail.com",
          userName: "Flarius",
          password: bcrypt.hashSync('123456', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Romina",
          lastName: "Riquelme",
          email: "LaRoPeronista@hotmail.com",
          userName: "Romi",
          password: bcrypt.hashSync('123', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}  
    );
},

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
