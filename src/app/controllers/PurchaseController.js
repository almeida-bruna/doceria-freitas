import Purchase from '../models/Purchase';

class PurchaseController {
  async store(req, res) {
    // const purchaseExists = await Purchase.findOne({
    //   where: { product_id: req.body.product_id },
    // });

    // if (purchaseExists) {
    //   return res.status(400).json({ error: 'purchase already exists' });
    // }

    const { id, payment_method, date, client_id, product_id } = await Purchase.create(req.body);

    return res.json({
      id,
      payment_method,
      date,
      client_id,
      product_id
    });
  }

  // async update(req, res) {
  //   const purchaseId = req.params.id;

  //   const purchase = await Purchase.findByPk(purchaseId);

  //   const dados = req.body;

  //   if (dados.name) {
  //     const purchaseExists = await purchase.findOne({
  //       where: { name: req.body.name },
  //     });

  //     if (purchaseExists) {
  //       return res.status(400).json({ error: 'purchase already exists' });
  //     }
  //   }

  //   const { id, name } = await Purchase.update(req.body);

  //   return res.json({
  //     id,
  //     name,
  //   });
  // }

  async get(req, res) {
    const purchase = await Purchase.findAll();

    return res.json(purchase);
  }
}

export default new PurchaseController();
