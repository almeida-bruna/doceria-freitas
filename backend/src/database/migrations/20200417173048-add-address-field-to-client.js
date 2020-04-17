'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('clients', 'address_id', {
      type: Sequelize.INTEGER,
      references: { model: 'address', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },
  down: queryInterface => {
    return queryInterface.removeColumn('clients', 'address_id');
  },
};
