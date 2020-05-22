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
        // telephone: Sequelize.STRING,
        cell_phone: Sequelize.STRING,
        cpf: Sequelize.STRING,
        dt_nasc: Sequelize.STRING,
        sex: Sequelize.STRING,
        type: Sequelize.STRING,
        disabled: Sequelize.STRING,
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
    // this.belongsTo(models.Address, { foreignKey: 'address_id', as: 'address' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Client;
