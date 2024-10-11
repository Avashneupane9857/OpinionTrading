import express from "express";
import { getBalance } from "./Controls/getBalance.js";
import { loadBalance } from "./Controls/loadBalance.js";
import { getStockBalance } from "./Controls/getStockBalance.js";

const router = express.Router();

router.get("/balance/inr/:userId", getBalance);

router.post("/onramp/inr", loadBalance);

router.get("/balance/stock/:userId", getStockBalance);

router.post("/order/yes", (req, res) => {
  res.send("check");
});

export default router;
