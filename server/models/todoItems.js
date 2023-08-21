//import mongoose to create mongoose model
const mongoose = require('mongoose');

const uri = "mongodb+srv://saianirudh2004:<password>@cluster0.5utbd5s.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri);
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function (error) {
  if (error) {
      console.log("Error!" + error);
  }
});
//create Schema
const TodoItemSchema = new mongoose.Schema({
  item:{
    type:String,
    required: true
  }
})

//export this Schema
module.exports = mongoose.model('todo', TodoItemSchema);