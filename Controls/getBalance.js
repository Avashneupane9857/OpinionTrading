import { INR_BALANCES } from "../dummyData.js";
export const getBalance = (req, res) => {
  const { userId } = req.params;
  const userBalance = INR_BALANCES[userId];
  if (userBalance) {
    res.json(userBalance);
  } else {
    res.status(500).send("No user Found");
  }
};
