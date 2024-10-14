
import { orderBookModel } from "../models/orderBookModel.js";

export const buyNoStock = (req, res) => {
  const { userId, stockSymbol, quantity, price } = req.body;

  if (!orderBookModel[stockSymbol]) {
    orderBookModel[stockSymbol] = { yes: {}, no: {} };
  }

  if (!orderBookModel[stockSymbol].no[price]) {
    orderBookModel[stockSymbol].no[price] = { total: 0, orders: {} };
  }

  if (!orderBookModel[stockSymbol].no[price].orders[userId]) {
    orderBookModel[stockSymbol].no[price].orders[userId] = 0;
  }

  orderBookModel[stockSymbol].no[price].orders[userId] += quantity;

  orderBookModel[stockSymbol].no[price].total += quantity;

  res.json({
    message: "Sell order placed successfully",
    orderbook: orderBookModel[stockSymbol],
  });
};
