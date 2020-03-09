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
}

export default News;
