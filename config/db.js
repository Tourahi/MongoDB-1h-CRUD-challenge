MONGO_URI = 'mongodb://127.0.0.1:27017'      //For simplicity
DBNAME    = 'MongoFun'
//-------------------------------------------
const mongoose = require('mongoose');

const ConnectDB = async () => {
  let conn = null;
  try {
      conn = await mongoose.connect(MONGO_URI+`/${DBNAME}`, {
      useNewUrlParser : true ,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log(`MongoDB connected : ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    // should exit process
  }finally{
    // console.log(conn.connections);
  }
}

module.exports = ConnectDB;
