import jwt from 'jsonwebtoken';
import Client from '../models/Client';
import authConfig from '../../config/Auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const client = await Client.findOne({ where: { email } });

    if (!client) {
      return res.status(401).json({ error: 'Client not found' });
    }
    
    if (!(await client.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = client;

    return res.json({
      client: {
        id,
        name,
        email
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    });
  }
}

export default new SessionController();
