const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const { body, validationResult } = require("express-validator");
const homeRouter = require("./routes/homeRouter.js");
const userRouter = require("./routes/userRouter.js");
const episodeRouter = require("./routes/episodeRouter.js");

const server = express();

//* Middlewares
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

// //*ValidarEmail
const validarInicioSesion = [
  body("email")
    .isEmail()
    .withMessage("Debe proporcionar un correo electrónico válido"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("La contraseña debe tener al menos 5 caracteres"),
];

server.use("/", homeRouter);
server.use(
  "/user",
  validarInicioSesion,
  (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  },
  userRouter
);

server.use("/episode", episodeRouter);

module.exports = server;
