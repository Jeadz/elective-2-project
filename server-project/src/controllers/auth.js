const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("../utils/jwt");
const { await } = require("await");
const user = require("../models/user");

/* Función que permite el registro de un usuario nuevo en el sistema */
const register = async (req,res) => {
  const {firstname, lastname, email,password} = req.body;
  if (!email) return res.status(400).send({msg: "El email es requerido"});
  if (!password) return res.status(400).send({msg: "La contraseña es requerida"});

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  const user = new User({
    firstname,
    lastname,
    email: email.toLowerCase(),
    role: "user",
    active: true,
    password: hashPassword,
  });

  try {
     const userStorage = await user.save()
     res.status(201).send(userStorage);
  } catch (error){
    res.status(400).send({msg: "Error al crear el usuario"});
  }
};

/* Función que permite inciar sesión */

const login = async (req, res) => {
  const {email,password} = req.body;
  try{
    if (!email || !password){
      throw new Error("El email y la contraseña son obligatorios");
    } 
    const emailLowerCase = email.toLowerCase();
    const userStorage = await User.findOne({ email: emailLowerCase}).exec();
    if (!userStorage) {
      throw new Error("El usuario no existe");
    }
    const check = await bcrypt.compare(password, userStorage.password);
    if (!check) {
      throw new Error("Contraseña incorrecta");
    }
    if (!userStorage.active) {
      throw new Error("Usuario no autorizado o no activo");
    }
    res.status(200).send({
      access: jwt.createAccessToken(userStorage),
      refresh: jwt.createRefreshToken(userStorage),
    });
  } catch (error) {
    res.status(400).send({msg: error.message});
  }
};

async function refreshAccessToken(req,res){
  try {
    const { token } = req.body;
    if (!token){
      return res.status(400).send({msg: "Token requerido" });
    }
    const {user_id} = jwt.decoded(token);
    // Buscar el usuario utilizando una promesa
    const userStorage = await User.findOne({_id:user_id});
    // Generar un nuevo token de acceso
    const accessToken = jwt.createAccessToken(userStorage);
    // Enviar la respuesta
    return res.status(200).send({accessToken});
  } catch (error){
    console.error("Error del servidor:", error);
    return res.status(500).send({msg: "Error del servidor"});
  }
}

module.exports = {
  register,
  login,
  refreshAccessToken,
};