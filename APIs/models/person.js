const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating person Schema
const PersonSchema = new Schema({
  name:{
    type:String,
    required:[true, "Name is required!"]
  },
  age:{
    type:Number,
    required:[true, "Age is required"]
  },
  gender:{
    type:String,
    required:[false]
  },
  mob:{
    type:Number,
    required:[false]
  }
});

//creating model

const Person = mongoose.model('person',PersonSchema);

module.exports = Person;
