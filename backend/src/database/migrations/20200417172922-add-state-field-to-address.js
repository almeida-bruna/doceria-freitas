'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('address', 'state_id', {
      type: Sequelize.INTEGER,
      references: { model: 'states', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },
  down: queryInterface => {
    return queryInterface.removeColumn('address', 'state_id');
  },
};
