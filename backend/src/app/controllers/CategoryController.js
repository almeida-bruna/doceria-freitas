import Category from '../models/Category';

class CategoryController {
  async store(req, res) {
    const categoryExists = await Category.findOne({ where: { name: req.body.name } });

    if (categoryExists) {
      return res.status(400).json({ error: 'Category already exists' });
    }

    const { id, name } = await Category.create(req.body);

    return res.json({
      id,
      name,
    });
  }

  async update(req, res) {
    const categoryId = req.params.id;

    const category = await Category.findByPk(categoryId);

    const dados = req.body;

    if (dados.name) {
      const categoryExists = await Category.findOne({
        where: { name: req.body.name },
      });

      if (categoryExists) {
        return res.status(400).json({ error: 'category already exists' });
      }
    }

    const { id, name } = await category.update(req.body);

    return res.json({
      id,
      name,
    });
  }

  async get(req, res) {
    const category = await Category.findAll({
      where: {
        disabled: '0',
      }
    });

    return res.json(category);
  }
}

export default new CategoryController();
