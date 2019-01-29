'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User_Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model: 'Users',
          key: 'id',
          as: 'userId'
        }
      },
      role_id: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references: {
          model: 'Roles',
          key: 'id',
          as: 'roleId'
        }
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User_Roles');
  }
};