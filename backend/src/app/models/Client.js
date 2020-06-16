import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        cell_phone: Sequelize.STRING,
        cpf: Sequelize.STRING,
        dt_nasc: Sequelize.STRING,
        sex: Sequelize.STRING,
        type: Sequelize.STRING,
        disabled: Sequelize.STRING,
        cep: Sequelize.STRING,
        address: Sequelize.STRING,
        number: Sequelize.STRING,
        complement: Sequelize.STRING,
        district: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async client => {
      if (client.password) {
        client.password_hash = await bcrypt.hash(client.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Client;
