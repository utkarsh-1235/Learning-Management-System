const express = require('express');
const app = new express();
const userAuthRoute = require('./Route/userRoute');
const courseRoute = require('./Route/courseRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const errorMiddleware = require('./Middleware/error.middleware');
const paymentRoute = require('./Route/paymentRoute');


app.use(express.json()); // Built-in middleware

app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: [process.env.FRONTEND_URL], credentials: true })); //Third-party middleware

app.use(cookieParser());   // Third-party middleware

app.use(morgan('dev'));

// course route
app.use('/api/v1/courses',courseRoute);
//auth route
app.use('/api/v1/users',userAuthRoute);
//payment route
app.use('/api/v1/payments',paymentRoute);


app.all('*',(req, res)=>{
    res.status(400).json('OOPS 404 not found')
})

app.use(errorMiddleware);
module.exports = app;