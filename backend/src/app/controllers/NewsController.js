import News from '../models/News';

class NewsController {
  async store(req, res) {
    const newsExists = await News.findOne({ where: { name: req.body.name } });

    if (newsExists) {
      return res.status(400).json({ error: 'News already exists' });
    }

    const { id, name } = await News.create(req.body);

    return res.json({
      id,
      name,
    });
  }

  async update(req, res) {
    const newsId = req.params.id;

    const news = await News.findByPk(newsId);

    const dados = req.body;

    if (dados.name) {
      const newsExists = await News.findOne({
        where: { name: req.body.name },
      });

      if (newsExists) {
        return res.status(400).json({ error: 'news already exists' });
      }
    }

    const { id, name } = await news.update(req.body);

    return res.json({
      id,
      name,
    });
  }

  async get(req, res) {
    const news = await News.findAll({
      where: {
        disabled: '0',
      },
    });

    return res.json(news);
  }
}

export default new NewsController();
