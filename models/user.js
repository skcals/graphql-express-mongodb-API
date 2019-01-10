const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    city: {
      type: String,
      required: true
    }
  },
  {
    collection: "users"
  }
);

module.exports = mongoose.model("user", userSchema);
