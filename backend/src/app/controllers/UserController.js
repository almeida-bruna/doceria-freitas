import User from '../models/User';
import File from '../models/File';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'Users already exists' });
    }

    const { id, name, email, telephone, type } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      telephone,
      type,
    });
  }

  async update(req, res) {
    const userId = req.params.id;

    const user = await User.findByPk(userId);

    const dados = req.body;

    if (dados.email) {
      const userExists = await User.findOne({
        where: { email: req.body.email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'Users already exists' });
      }
    }

    const { id, name, email, telephone, type } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      telephone,
      type,
    });
  }

  async get(req, res) {
    const user = await User.findAll({
      where: {
        disabled: '0',
      },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(user);
  }
}

export default new UserController();
