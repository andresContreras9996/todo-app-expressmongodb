const mongoose = require('mongoose');

const todoListSchema = new mongoose.Schema({
  title:{
    	type:String,
      required:true
  },
  task:{
    type:String,
    required:true
  },
  todoDate:{
    type:Date,
    required:true,
    default:Date.now()
  }
});

module.exports = mongoose.model('TodoNote', todoListSchema);