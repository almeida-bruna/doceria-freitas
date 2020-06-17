import State from '../models/State';

class StateController {
  async get(req, res) {
    const state = await State.findAll({
      where: {
        disabled: '0',
      },
    });

    return res.json(state);
  }
}

export default new StateController();
