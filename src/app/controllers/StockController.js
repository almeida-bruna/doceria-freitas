import Stock from '../models/Stock';

class StockController {
  async store(req, res) {
    const stockExists = await Stock.findOne({
      where: { product_id: req.body.product_id },
    });

    if (stockExists) {
      return res.status(400).json({ error: 'stock already exists' });
    }

    const { id, name } = await Stock.create(req.body);

    return res.json({
      id,
      name,
    });
  }

  async update(req, res) {
    const productId = req.params.id;

    const stoke = await Stock.findOne({
      where: { product_id: productId },
    });

    const { id, quantity } = await stoke.update(req.body);

    return res.json({
      id,
      quantity,
    });
  }

  async get(req, res) {
    const stock = await Stock.findAll();

    return res.json(stock);
  }
}

export default new StockController();
