import Promotion from '../models/Promotion';
import Product from '../models/Product';
import File from '../models/File';

class PromotionController {
  async store(req, res) {
    // const promotionExists = await Promotion.findOne({ where: { name: req.body.name } });

    // if (promotionExists) {
    //   return res.status(400).json({ error: 'Promotion already exists' });
    // }

    const { id, name, newValue, product_id } = await Promotion.create(req.body);

    return res.json({
      id,
      name,
      newValue,
      product_id,
    });
  }

  async update(req, res) {
    const promotionId = req.params.id;

    const promotion = await Promotion.findByPk(promotionId);

    const dados = req.body;

    if (dados.name) {
      const promotionExists = await Promotion.findOne({
        where: { name: req.body.name },
      });

      if (promotionExists) {
        return res.status(400).json({ error: 'promotion already exists' });
      }
    }

    const { id, name } = await promotion.update(req.body);

    return res.json({
      id,
      name,
    });
  }

  async get(req, res) {
    const promotion = await Promotion.findAll({
      include: [
        {
          model: Product,
          as: 'products',
          attributes: ['id', 'name', 'unity', 'status', 'description', 'price', 'img_id'],
        },
      ],
    });

    return res.json(promotion);
  }
}

export default new PromotionController();
