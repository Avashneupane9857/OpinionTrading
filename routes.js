import express from "express";

const router = express.Router();

router.get("/balance/inr/:userId", (req, res) => {
  res.send("check");
});

router.post("/onramp/inr", (req, res) => {
  res.send("check");
});

router.get("/balance/stock/:userId", (req, res) => {
  res.send("check");
});

router.post("/order/yes", (req, res) => {
  res.send("check");
});

export default router;
