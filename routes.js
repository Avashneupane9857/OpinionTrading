import express from "express";
import { getBalance } from "./Controls/getBalance.js";
import { loadBalance } from "./Controls/loadBalance.js";
import { getStockBalance } from "./Controls/getStockBalance.js";
import { buyYesStock } from "./Controls/buyYesStock.js";
import { buyNoStock } from "./Controls/buyNoStock.js";
import { getStocks } from "./Controls/getStocks.js";
import { createUser } from "./Controls/createUser.js";

const router = express.Router();
router.post("/user/create/:userId", createUser);

router.get("/balance/inr/:userId", getBalance);

router.post("/onramp/inr", loadBalance);

router.post("/order/yes", buyYesStock);

router.post("/order/no", buyNoStock);

router.get("/balance/stock/:userId", getStockBalance);
router.get("/orderbook/:stocksymbol", getStocks);

export default router;
