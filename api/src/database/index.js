const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/noderest', { useNewUrlParser: true, useFindAndModify: false }); // "useMongoClient = forma de se conectar com o banco"
mongoose.Promise = global.Promise;

module.exports = mongoose;