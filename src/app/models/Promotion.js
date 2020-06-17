import Sequelize, { Model } from 'sequelize';

class Promotion extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        newValue: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'products' });
  }
}

export default Promotion;
