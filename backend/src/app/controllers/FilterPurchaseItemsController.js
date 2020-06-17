import PurchaseItems from '../models/PurchasesItems';

class FilterPurchaseItemsController {
  async get(req, res) {
    const purchaseItem = req.query;

    const purchaseItems = await PurchaseItems.findAll({
      where: {
        purchase_id: purchaseItem.purchase_id,
      }
    });

    return res.json(purchaseItems);
  }

}

export default new FilterPurchaseItemsController();
