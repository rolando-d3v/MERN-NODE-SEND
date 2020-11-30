const mongoose = require("mongoose");
const db = process.env.URLDB;


const conectarDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
      },
      () => {
        console.log("server db conected");
      }
    );
  } catch (err) {
    console.log(err);
    console.log("error en servidor db");
    process.exit(1)
  }
};

module.exports = conectarDB
