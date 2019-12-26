const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://maha:<password>@cluster0-irssu.mongodb.net/test?retryWrites=true&w=majority');



const urlSchema = new Schema({
  url: String,
  baseURL: String,
  code: String,
  title: String,
  visits: Number,
  user: usersSchema,
  timestamps: { type: Date, default: Date.now }
});


const usersSchema = new Schema({
  username: { Type: String, unique: true },
  password: String,
  timestamps: { type: Date, default: Date.now }

})



var BookShelf = mongoose.model('Bookshelf', urlSchema)