import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import responseHandler from "../utils/responseHandler.js";

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
      return responseHandler(res, 200, user, null);
    } catch (error) {
      return responseHandler(res, 400, { message: "Cannot signup user" }, null);
    }
  },
};

export default authController;
