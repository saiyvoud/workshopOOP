import { Request, Response } from "express";
import conneted from "../config/db";
import { Encrypts } from "../service/service";
class AuthController {
  async Register(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "email and password is required!" });
      }
      const genPassword = await Encrypts(password);
      const mysql = "Insert into user (email,password) values(?,?)";
      conneted.query(mysql, [email, genPassword], function (err, result) {
        if (err) throw err;
        return res
          .status(201)
          .json({ status: true, message: "Register Success" });
      });
    } catch (error) {
      return res.status(500).json({ message: "Error Server Internal", error });
    }
  }
}
export default AuthController;
