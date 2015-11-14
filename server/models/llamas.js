var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Llama = new Schema ({
  name: String,
  age: Number,
  spitter: Boolean
});

// hook up your database
mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGO_URI);
// one way to require the model
module.exports = mongoose.model("Llamas", Llama);
