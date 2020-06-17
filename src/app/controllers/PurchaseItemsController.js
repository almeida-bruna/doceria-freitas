import PurchaseItems from '../models/PurchasesItems';

class PurchaseItemsController {
  async store(req, res) {
    // const purchaseExists = await PurchaseItems.findOne({
    //   where: { product_id: req.body.product_id },
    // });

    // if (purchaseExists) {
    //   return res.status(400).json({ error: 'purchase already exists' });
    // }

    const { id, product_id, purchase_id } = await PurchaseItems.create(req.body);

    return res.json({
      id,
      product_id,
      purchase_id
    });
  }

  // async update(req, res) {
  //   const purchaseId = req.params.id;

  //   const purchase = await PurchaseItems.findByPk(purchaseId);

  //   const dados = req.body;

  //   if (dados.name) {
  //     const purchaseExists = await purchase.findOne({
  //       where: { name: req.body.name },
  //     });

  //     if (purchaseExists) {
  //       return res.status(400).json({ error: 'purchase already exists' });
  //     }
  //   }

  //   const { id, name } = await PurchaseItems.update(req.body);

  //   return res.json({
  //     id,
  //     name,
  //   });
  // }

  async get(req, res) {
    const purchase = await PurchaseItems.findAll();

    return res.json(purchase);
  }
}

export default new PurchaseItemsController();
