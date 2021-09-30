const mongoose = require('mongoose');

require("dotenv").config();
//Connect to DB
const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                autoIndex: true,
                useFindAndModify: false
            },
            (err => {
                if (err) return new Error("Failed to connect to database");
                console.log("DB connected");
            })

        );
    } catch (e) {
        console.log(e.message)
    }


};
module.exports = connectDB;