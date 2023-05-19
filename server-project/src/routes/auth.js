const express = require("express");
const AuthController = require("../controllers/auth");

const api = express.Router();

api.get("/register", AuthController.register);
api.post("/register", AuthController.register);
api.get("/login", AuthController.login);
api.post("/login", AuthController.login);
api.post("/refresh_access_token", AuthController.refreshAccessToken);

module.exports = api;
