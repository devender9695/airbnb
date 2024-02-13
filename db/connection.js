require("dotenv").config(); 

const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI; 

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.error("connection failed", err));
