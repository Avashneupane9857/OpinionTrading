import { userModel } from "../models/userModel.js";

export const loadBalance = (req, res) => {
  const userId = req.body.userId;
  const amount = req.body.balance;
  if (!userModel[userId]) {
    return res.status(400).json({ msg: "no user found" });
  }
  userModel[userId].balance = userModel[userId].balance + amount / 100;
  res.json({ msg: "balance updated", balance: userModel[userId] });
};
