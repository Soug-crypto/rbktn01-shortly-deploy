const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const db = mongoose.connection;
mongoose.set("useCreateIndex", true);
mongoose.Promise = global.Promise;

db.once("open", () => {
  console.log("Mongoose is live wooohhhho!");
});

const usersSchema = new Schema({
  username: String,
  password: String,
  timestamps: { type: Date, default: Date.now }
});

const urlSchema = new Schema({
  url: { type: String, unique: true },
  baseURL: String,
  code: String,
  title: String,
  visits: { type: Number, default: 0 },
  user: usersSchema,
  timestamps: { type: Date, default: Date.now }
});

var BookShelf = mongoose.model("Bookshelf", urlSchema);

module.exports.save = obj => {
  return BookShelf.create(obj);
};
