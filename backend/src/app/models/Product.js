import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        unity: Sequelize.STRING,
        status: Sequelize.STRING,
        description: Sequelize.STRING,
        price: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'img_id', as: 'img' });
  }

}

export default Product;
