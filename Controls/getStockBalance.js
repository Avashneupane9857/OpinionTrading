import { stockBalance } from "../models/stockBalance.js";

export const getStockBalance = (req, res) => {
  const userId = req.params.userId;
  const stockbalance = stockBalance[userId];
  if (stockbalance) {
    res.send(stockbalance);
  } else {
    res.status(404).json({
      msg: "Userr not found in STOCK BALANCE",
    });
  }
};
