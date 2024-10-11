import express from "express";
export const route = express.Router;

route.get("/balance/inr/:userId");
route.post("/onramp/inr");
route.get("/balance/stock/:userId ");
route.post(" /order/yes");
route.post("/order/no");
route.post(" /orderbook/:stockSymbol");
route.post("/trade/mint/:stockSymbol");
