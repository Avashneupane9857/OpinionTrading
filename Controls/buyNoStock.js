import { ORDERBOOK } from "../dummyData.js";

export const buyNoStock = (req, res) => {
  const { userId, stockSymbol, quantity, price } = req.body;

  if (!ORDERBOOK[stockSymbol]) {
    ORDERBOOK[stockSymbol] = { yes: {}, no: {} };
  }

  if (!ORDERBOOK[stockSymbol].no[price]) {
    ORDERBOOK[stockSymbol].no[price] = { total: 0, orders: {} };
  }

  if (!ORDERBOOK[stockSymbol].no[price].orders[userId]) {
    ORDERBOOK[stockSymbol].no[price].orders[userId] = 0;
  }

  ORDERBOOK[stockSymbol].no[price].orders[userId] += quantity;

  ORDERBOOK[stockSymbol].no[price].total += quantity;

  res.json({
    message: "Sell order placed successfully",
    orderbook: ORDERBOOK[stockSymbol],
  });
};
