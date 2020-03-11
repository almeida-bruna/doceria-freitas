import Stock from '../models/Stock';

class StockController {
  async store(req, res) {
    const stockExists = await Stock.findOne({
      where: { email: req.body.email },
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
    const stockId = req.params.id;

    const stock = await Stock.findByPk(stockId);

    const dados = req.body;

    if (dados.name) {
      const stockExists = await stock.findOne({
        where: { name: req.body.name },
      });

      if (stockExists) {
        return res.status(400).json({ error: 'stock already exists' });
      }
    }

    const { id, name } = await Stock.update(req.body);

    return res.json({
      id,
      name,
    });
  }

  async get(req, res) {
    const stock = await Stock.findAll({
      where: {
        disabled: '0',
      },
    });

    return res.json(stock);
  }
}

export default new StockController();
