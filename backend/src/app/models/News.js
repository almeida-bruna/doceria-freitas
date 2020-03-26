import Sequelize, { Model } from 'sequelize';

class News extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        text: Sequelize.STRING,
        disabled: Sequelize.STRING,
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

export default News;
