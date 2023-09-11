const express = require('express')

const authRoute = express.Router();


const upload = require('../Middleware/multer.middleware');

const {isLoggedIn} = require('../Middleware/auth.middleware');

const {register,
       login,
       logout,
       getprofile,
       forgotPassword,
       resetPassword,
       changePassword,
updateUser} = require('../Controllers/userAuthController.js')


authRoute.post('/register', upload.single("avatar"), register);
authRoute.post('/login', login);
authRoute.post('/logout', logout);
authRoute.get('/me', isLoggedIn, getprofile);
authRoute.post("/reset", forgotPassword);
authRoute.post("/reset/:resetToken", resetPassword);
authRoute.post('/change-password', isLoggedIn, changePassword);
authRoute.put('/update', isLoggedIn, upload.single("avatar"), updateUser);




module.exports = authRoute;