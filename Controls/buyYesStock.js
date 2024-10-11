import { ORDERBOOK } from "../dummyData.js";

export const buyYesStock = (req, res) => {
  const { userId, stockSymbol, quantity, price } = req.body;
  const totalCost = quantity * price;

  const userBalance = INR_BALANCES[userId];
  if (!userBalance || userBalance.balance < totalCost) {
    return res.status(400).json({ message: "Paisa chaina mg" });
  }

  userBalance.balance -= totalCost;
  userBalance.locked += totalCost;
  if (!ORDERBOOK[stockSymbol]) {
    ORDERBOOK[stockSymbol] = { yes: {}, no: {} };
  }
  if (!ORDERBOOK[stockSymbol].yes[price]) {
    ORDERBOOK[stockSymbol].yes[price] = { total: 0, orders: {} };
  }
  if (!ORDERBOOK[stockSymbol].yes[price].orders[userId]) {
    ORDERBOOK[stockSymbol].yes[price].orders[userId] = 0;
  }

  ORDERBOOK[stockSymbol].yes[price].orders[userId] =
    ORDERBOOK[stockSymbol].yes[price].orders[userId] + quantity;
  ORDERBOOK[stockSymbol].yes[price].total =
    ORDERBOOK[stockSymbol].yes[price].total + quantity;
  res.json({
    message: "Order placed successfully",
    orderbook: ORDERBOOK[stockSymbol],
  });
};
