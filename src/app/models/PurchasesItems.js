import Sequelize, { Model } from 'sequelize';

class PurchasesItems extends Model {
  static init(sequelize) {
    super.init(
      {
        qtd: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.PurchasesItems, { foreignKey: 'purchase_id', as: 'purchase' });
    this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'products' });
  }

}

export default PurchasesItems;
