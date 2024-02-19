const { Router } = require("express");
const {
  getUser,
  postUser,
  putUser,
  deleteUser,
} = require("../controllers/userController.js");
const userRouter = Router();

userRouter.get("/:emailUser", getUser);
userRouter.post("/", postUser);
userRouter.put("/:emailUser", putUser);
userRouter.delete("/:emailUser", deleteUser);
module.exports = userRouter;
