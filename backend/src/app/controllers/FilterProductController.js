import { Op } from 'sequelize';
import Product from '../models/Product';
import File from '../models/File';


class FilterProductController {
  async show(req, res) {
    const product = req.query;

    const products = await Product.findAll({
      where: {
        name: {
          [Op.like]: `%${product.name}`,
        },
      },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ]
    });

    return res.json(products);
  }

  async get(req, res) {
    const product = req.query;

    const products = await Product.findAll({
      where: {
        id: product.id
      },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(products);
  }
}

export default new FilterProductController();
