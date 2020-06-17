import Sequelize, { Model } from 'sequelize';

class States extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        initials: Sequelize.STRING
      },
      {
        sequelize
      }
    );

    return this;
  }
}

export default States;
