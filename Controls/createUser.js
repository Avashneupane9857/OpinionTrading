import { userModel } from "../models/userModel.js";

export const createUser = (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  if (!userId) {
    return res.status(401).json({
      msg: "No user Id ",
      success: false,
    });
  }

  userModel[userId] = {
    balance: 0,
    locked: 0,
  };
  res.status(200).json({ msg: "User created" });
};

// user1: {
//     balance: 10,
//     locked: 0,
//   },
