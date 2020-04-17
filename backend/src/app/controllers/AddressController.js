import Address from '../models/Address';

class AddressController {
  async store(req, res) {
    // const addressExists = await Address.findOne({ where: { name: req.body.name } });

    // if (addressExists) {
    //   return res.status(400).json({ error: 'Address already exists' });
    // }

    const { id, name } = await Address.create(req.body);

    return res.json({
      id,
      name,
    });
  }

  async update(req, res) {
    const addressId = req.params.id;

    const address = await Address.findByPk(addressId);

    const dados = req.body;

    if (dados.name) {
      const addressExists = await Address.findOne({
        where: { name: req.body.name },
      });

      if (addressExists) {
        return res.status(400).json({ error: 'address already exists' });
      }
    }

    const { id, name } = await address.update(req.body);

    return res.json({
      id,
      name,
    });
  }

  async get(req, res) {
    const address = await Address.findAll({
      where: {
        disabled: '0',
      }
    });

    return res.json(address);
  }
}

export default new AddressController();
