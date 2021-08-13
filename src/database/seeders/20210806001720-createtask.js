'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          name: "tarea 1",
          description: "tarea de ejemplo 1",
          UserId: 1,
          startDate: new Date(),
          endDate:   new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "tarea 2",
          description: "tarea de ejemplo 2",
          UserId: 2,
          startDate: new Date(),
          endDate:   new Date(),
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
