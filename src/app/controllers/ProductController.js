import Product from '../models/Product';
import File from '../models/File';
import Category from '../models/Category';

class ProductController {
  async store(req, res) {
    const productExists = await Product.findOne({
      where: { name: req.body.name },
    });

    if (productExists) {
      return res.status(400).json({ error: 'Product already exists' });
    }

    const { id, name } = await Product.create(req.body);

    return res.json({
      id,
      name,
    });
  }

  async update(req, res) {
    const productId = req.params.id;

    const product = await Product.findByPk(productId);

    const dados = req.body;

    if (dados.name) {
      const productExists = await product.findOne({
        where: { name: req.body.name },
      });

      if (productExists) {
        return res.status(400).json({ error: 'product already exists' });
      }
    }

    const { id, name } = await Product.update(req.body);

    return res.json({
      id,
      name,
    });
  }

  async get(req, res) {
    const product = await Product.findAll({
      where: {
        status: 'ativo',
      },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
        {
          model: Category,
          as: 'categories',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(product);
  }
}

export default new ProductController();
