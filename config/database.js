const { connect } = require("mongoose");

/**
 * This config is helps to connect with the database
 * @returns {Promise<any>} Returns Mongoose connection as promise
 */
const DBConnection = () => {
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