import Sequelize, { Model } from 'sequelize';

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        cep: Sequelize.STRING,
        address: Sequelize.STRING,
        district: Sequelize.STRING,
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
    this.belongsTo(models.File, { foreignKey: 'state_id', as: 'states' });
  }
}

export default Address;
