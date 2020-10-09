'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('books', [
      {
        author: 'John Doe',
        title: 'JdoLife',
        pageQuantity: 150,
        createdAt: '2020-10-09',
        updatedAt: '2020-10-09',
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('books', null, {});
  }
};
