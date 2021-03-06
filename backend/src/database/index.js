import Sequelize from 'sequelize';

import User from '../app/models/User';
import Product from '../app/models/Product';
import News from '../app/models/News';
import File from '../app/models/File';
import Stock from '../app/models/Stock';
import Client from '../app/models/Client';
import Category from '../app/models/Category';
import State from '../app/models/State';
import Promotion from '../app/models/Promotion';
import Purchase from '../app/models/Purchase';
import PurchaseItems from '../app/models/PurchasesItems';

import databaseConfig from '../config/database';

const models = [User, Product, News, File, Stock, Client, Category, State, Promotion, Purchase, PurchaseItems];

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
