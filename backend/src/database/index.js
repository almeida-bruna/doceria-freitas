import Sequelize from 'sequelize';

import User from '../app/models/User';
import Product from '../app/models/Product';
import News from '../app/models/News';
import File from '../app/models/File';
import Stock from '../app/models/Stock';

import databaseConfig from '../config/database';

const models = [User, Product, News, File, Stock];

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
