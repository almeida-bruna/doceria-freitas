import Purchase from '../models/Purchase';

class FilterPurchaseHistoryController {
  async get(req, res) {
    const purchaseHistory = req.query;

    const purchaseHistorys = await Purchase.findAll({
      where: {
        client_id: purchaseHistory.client_id,
      }
    });

    return res.json(purchaseHistorys);
  }

}

export default new FilterPurchaseHistoryController();
