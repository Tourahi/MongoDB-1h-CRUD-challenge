const mongoose = require('mongoose');
const schema   = mongoose.Schema;

const BookSchema = new schema({
  title : String,
  author : String,
  category : String,
});

module.exports = mongoose.model('Book' , BookSchema);
