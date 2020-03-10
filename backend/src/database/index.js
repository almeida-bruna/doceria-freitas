import Sequelize from 'sequelize';

import User from '../app/models/User';
import Product from '../app/models/Product';
import News from '../app/models/News';

import databaseConfig from '../config/database';

const models = [User, Product, News];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
