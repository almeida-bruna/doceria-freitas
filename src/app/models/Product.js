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
        value: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'img_id', as: 'avatar' });
    this.belongsTo(models.Category, { foreignKey: 'category', as: 'categories' });
  }
}

export default Product;
