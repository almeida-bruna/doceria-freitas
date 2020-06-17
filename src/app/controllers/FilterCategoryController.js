import { Op } from 'sequelize';
import Category from '../models/Category';

class FilterCategoryController {
  async show(req, res) {
    const category = req.query;

    const categories = await Category.findAll({
      where: {
        name: {
          [Op.like]: `%${category.name}`,
        },
      },
    });

    return res.json(categories);
  }
}

export default new FilterCategoryController();
