import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        cep: Sequelize.STRING,
        address: Sequelize.STRING,
        district: Sequelize.VIRTUAL,
        city: Sequelize.STRING,
        public_place: Sequelize.STRING,
        number: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );


    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }
}

export default Address;
