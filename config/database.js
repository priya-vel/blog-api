const { connect } = require("mongoose");


const DBConnection = () =>{
  return connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
}

module.exports = {
    DBConnection 
}