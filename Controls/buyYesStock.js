import { orderBookModel } from "../models/orderBookModel.js";
import { userModel } from "../models/userModel.js";

export const buyYesStock = (req, res) => {
  const { userId, stockSymbol, quantity, price } = req.body;
  const totalCost = quantity * price;

  const userBalance = userModel[userId];
  if (!userBalance || userBalance.balance < totalCost) {
    return res.status(400).json({ message: "No fund please load money" });
  }

  userBalance.balance -= totalCost;
  userBalance.locked += totalCost;
  if (!orderBookModel[stockSymbol]) {
    orderBookModel[stockSymbol] = { yes: {}, no: {} };
  }
  if (!orderBookModel[stockSymbol].yes[price]) {
    orderBookModel[stockSymbol].yes[price] = { total: 0, orders: {} };
  }
  if (!orderBookModel[stockSymbol].yes[price].orders[userId]) {
    orderBookModel[stockSymbol].yes[price].orders[userId] = 0;
  }

  orderBookModel[stockSymbol].yes[price].orders[userId] =
    orderBookModel[stockSymbol].yes[price].orders[userId] + quantity;
  orderBookModel[stockSymbol].yes[price].total =
    orderBookModel[stockSymbol].yes[price].total + quantity;
  res.json({
    message: "Order placed successfully",
    orderbook: orderBookModel[stockSymbol],
  });
};
