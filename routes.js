import express from "express";
import { getBalance } from "./Controls/getBalance.js";
import { loadBalance } from "./Controls/loadBalance.js";
import { getStockBalance } from "./Controls/getStockBalance.js";
import { buyYesStock } from "./Controls/buyYesStock.js";
import { buyNoStock } from "./Controls/buyNoStock.js";
import { getStocks } from "./Controls/getStocks.js";

const router = express.Router();

router.get("/balance/inr/:userId", getBalance);

router.post("/onramp/inr", loadBalance);

router.get("/balance/stock/:userId", getStockBalance);

router.post("/order/yes", buyYesStock);

router.post("/order/no", buyNoStock);
router.get("/orderbook/:stocksymbol", getStocks);

export default router;
