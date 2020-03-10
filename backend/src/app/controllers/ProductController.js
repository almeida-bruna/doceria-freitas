import Product from '../models/Product';

class ProductController {
  async store(req, res) {
    const productExists = await User.findOne({ where: { email: req.body.email } });

    if (productExists) {
      return res.status(400).json({ error: 'Product already exists' });
    }

    const { id, name } = await User.create(req.body);

    return res.json({
      id,
      name
    });
  }

  async update(req, res) {
    const productId = req.params.id;

    const product = await User.findByPk(productId);

    const dados = req.body;

    if (dados.name) {
      const productExists = await product.findOne({
        where: { name: req.body.name },
      });

      if (productExists) {
        return res.status(400).json({ error: 'product already exists' });
      }
    }

    const { id, name } = await user.update(req.body);

    return res.json({
      id,
      name
    });
  }

  async get(req, res) {
    const product = await Product.findAll({
      where: {
        disabled: '0',
      },
    });

    return res.json(product);
  }
}

export default new ProductController();
