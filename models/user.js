const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String
});

//create collection, if does not already exist
mongoose.model('users', userSchema);