const app = require('./app');
const dbConnect = require('./Config/db');
const cloudinary = require('cloudinary');
const razorpay = require('razorpay');

require('dotenv').config()


const port = process.env.PORT || 4001;

// Cloudinary configuration
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const RazorPay = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET
})
app.listen(port,async ()=>{
    //database connected
    await dbConnect();
    console.log(`server is running at https://localhost/${port}`)
})

module.exports = RazorPay;