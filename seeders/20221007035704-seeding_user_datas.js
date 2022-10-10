'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Users', [{
      username: 'John Doe',
      email: 'johndoe@mail.com',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      username: 'Rachel',
      email: 'rachel@mail.com',
      createdAt : new Date(),
      updatedAt : new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
