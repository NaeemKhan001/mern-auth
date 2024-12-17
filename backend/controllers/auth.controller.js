import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const authController = {
  test: (req, res) => {
    res.send("auth api test");
  },

  signup: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      console.log("req.body >>>", req.body);

      const hashedPassword = bcrypt.hashSync(password, 10);

      const user = await User.create({ name, email, password: hashedPassword });
      res
        .status(201)
        .json({ message: "User created successfully", data: user });
    } catch (error) {
      res.status(500).json({ message: "Error creating user", error });
    }
  },
};

export default authController;
