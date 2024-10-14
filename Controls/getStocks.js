import { orderBookModel } from "../models/orderBookModel.js";

export const getStocks = (req, res) => {
  const { stocksymbol } = req.params;

  if (!orderBookModel[stocksymbol]) {
    return res.json({ msg: "No stocks of this name available" });
  }
  res.json({
    stocksymbol,
    orderbook: orderBookModel[stocksymbol],
  });
};
