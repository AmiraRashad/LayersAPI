const mongoose = require('mongoose');
var config = require("config");
//config.get(db);
 const URI="mongodb+srv://DBuser:amira123@cluster0.gdban.mongodb.net/layers?retryWrites=true&w=majority";


const connectDB = async ()=>{
    await mongoose.connect(config.get("db"),{ useUnifiedTopology: true, useNewUrlParser: true  });
    console.log("Connection Established");
}

module.exports=connectDB;