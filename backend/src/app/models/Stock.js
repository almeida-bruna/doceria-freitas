import Sequelize, { Model } from 'sequelize';

class Stock extends Model {
  static init(sequelize) {
    super.init(
      {
        quantidade: Sequelize.STRING,
        disabled: Sequelize.STRING
      },
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
  }
}

export default Stock;
