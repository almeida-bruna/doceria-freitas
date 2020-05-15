import Client from '../models/Client';
import File from '../models/File';
import Address from '../models/Address';

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
        {
          model: Address,
          as: 'address',
          attributes: ['address', 'district', 'city', 'cep', 'number', 'state_id']
        }
      ],
    });

    return res.json(clients);
  }

}

export default new FilterClientController();
