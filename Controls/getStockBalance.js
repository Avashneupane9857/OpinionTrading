import { STOCK_BALANCES } from "../dummyData.js";

export const getStockBalance = (req, res) => {
  const userId = req.params.userId;
  const stockbalance = STOCK_BALANCES[userId];
  if (stockbalance) {
    res.send(stockbalance);
  } else {
    res.status(404).json({
      msg: "Userr not found in STOCK BALANCE",
    });
  }
};
