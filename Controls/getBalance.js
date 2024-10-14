
import { userModel } from "../models/userModel.js";
export const getBalance = (req, res) => {
  const { userId } = req.params;
  const userBalance = userModel[userId];
  if (userBalance) {
    res.json(userBalance);
  } else {
    res.status(500).send("No user Found");
  }
};
