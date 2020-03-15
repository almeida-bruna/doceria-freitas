import { Op } from 'sequelize';
import Product from '../models/Product';

class FilterProductController {
  async show(req, res) {
    const product = req.body.name;
    const products = await Product.findAll({
      where: {
        name: {
          [Op.like]: `%${product}`,
        },
      },
    });

    return res.json(products);
  }
}

export default new FilterProductController();
