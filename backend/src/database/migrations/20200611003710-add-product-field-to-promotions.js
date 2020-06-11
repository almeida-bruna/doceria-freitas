'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('promotions', 'product', {
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
    });
  },
  down: queryInterface => {
    return queryInterface.removeColumn('promotions', 'product');
  },
};
