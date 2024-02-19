//* MANEJA UN CRUD
const dataBase = require("../utils/dataBase");

module.exports = {
  getUser: (req, res) => {
    const { emailUser } = req.params;
    console.log(emailUser);
    //*conseguir el index del usuario email a editar
    const findIndexUser = dataBase.allUsers.findIndex(
      (user) => user.email === emailUser
    );
    if (findIndexUser === -1) {
      res.status(404).json({ message: "Usuario No encontrado" });
    } else {
      res.status(200).json({
        message: "Usuario encontrado",
        usuario: dataBase.allUsers[findIndexUser],
      });
    }
  },
  postUser: (req, res) => {
    const { name, email, password } = req.body;
    const emailExists = dataBase.allUsers.some((user) => user.email === email);
    if (!emailExists) {
      dataBase.allUsers.push({ name, email, password });
      console.log(dataBase.allUsers);
      res.status(200).json({ name, password, email });
    } else {
      return res
        .status(400)
        .json({ message: "Email ya se encuentra registrado" });
    }
  },
  putUser: (req, res) => {
    const { name, password, email } = req.body;
    const { emailUser } = req.params;
    console.log(name, password, email);
    console.log(emailUser);

    //*conseguir el index del usuario email a editar
    const findIndexUser = dataBase.allUsers.findIndex(
      (user) => user.email === emailUser
    );

    if (findIndexUser === -1) {
      return res.status(400).json({ message: "Email no existe" });
    }
    dataBase.allUsers[findIndexUser].name =
      name || dataBase.allUsers[findIndexUser].name;
    dataBase.allUsers[findIndexUser].email =
      email || dataBase.allUsers[findIndexUser].email;
    dataBase.allUsers[findIndexUser].password =
      password || dataBase.allUsers[findIndexUser].password;

    res
      .status(200)
      .json({ message: "Datos actualizados", usuarios: dataBase.allUsers });
  },
  deleteUser: (req, res) => {
    const { emailUser } = req.params;
    console.log(emailUser);
    const emailExists = dataBase.allUsers.some(
      (user) => user.email === emailUser
    );
    if (emailExists) {
      const userDelete = dataBase.allUsers.filter(
        (user) => user.email !== emailUser
      );
      dataBase.allUsers = userDelete;
      res
        .status(200)
        .json({ message: "Usuario a eliminar", usuarios: dataBase.allUsers });
    } else {
      res
        .status(404)
        .json({
          message: "Usuario a eliminar no existe",
          usuarios: dataBase.allUsers,
        });
    }
  },
};
