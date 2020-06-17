import Client from '../models/Client';
import File from '../models/File';

class FilterClientController {
  async get(req, res) {
    const client = req.query;

    const clients = await Client.findAll({
      where: {
        id: client.id,
      },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(clients);
  }

}

export default new FilterClientController();
