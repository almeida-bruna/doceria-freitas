import Client from '../models/Client';
import File from '../models/File';

class ClientController {
  async store(req, res) {
    const clientExists = await Client.findOne({ where: { email: req.body.email } });

    if (clientExists) {
      return res.status(400).json({ error: 'Clients already exists' });
    }

    const { id, name, email, type } = await Client.create(req.body);

    return res.json({
      id,
      name,
      email,
      // telephone,
      type,
    });
  }

  async update(req, res) {
    const clientId = req.params.id;

    const client = await Client.findByPk(clientId);

    const dados = req.body;

    if (dados.email) {
      const clientExists = await Client.findOne({
        where: { email: req.body.email },
      });

      if (clientExists) {
        return res.status(400).json({ error: 'Clients already exists' });
      }
    }

    const { id, name, email, type } = await client.update(req.body);

    return res.json({
      id,
      name,
      email,
      // telephone,
      type,
    });
  }

  async get(req, res) {
    const client = await Client.findAll({
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

    return res.json(client);
  }
}

export default new ClientController();
