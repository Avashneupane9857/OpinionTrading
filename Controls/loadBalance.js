import { INR_BALANCES } from "../dummyData.js";

export const loadBalance = (req, res) => {
  const userId = req.body.userId;
  const amount = req.body.balance;
  if (!INR_BALANCES[userId]) {
    INR_BALANCES[userId] = { balance: 10, locked: 0 };
  }
  INR_BALANCES[userId].balance = INR_BALANCES[userId].balance + amount / 100;
  res.json({ msg: "balance updated", balance: INR_BALANCES[userId] });
};
