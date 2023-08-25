const express = require('express')

const authRoute = express.Router();

const authmiddleware = require('../Middleware/middleware')

const {signUp,
       signIn,
       forgotPassword,
       resetPassword,
       getUser,
       logout} = require('../Controllers/Controller.js')


authRoute.post('/signup', signUp);
authRoute.post('/signin', signIn);
authRoute.post("/forgotpassword", forgotPassword);
authRoute.post("/resetpassword/:token", resetPassword);

authRoute.get("/user", authmiddleware, getUser);
authRoute.get("/logout", authmiddleware, logout);

module.exports = authRoute;