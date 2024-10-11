import { ORDERBOOK } from "../dummyData.js";

export const getStocks = (req, res) => {
  const { stocksymbol } = req.params;

  if (!ORDERBOOK[stocksymbol]) {
    return res.json({ msg: "No stocks of this name available" });
  }
  res.json({
    stocksymbol,
    orderbook: ORDERBOOK[stocksymbol],
  });
};
