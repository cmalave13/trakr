const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, //has to be unique
      trim: true, // will trim white space
      minlength: 3,
    },
  },
  {
    timestamps: true, // create fields for when its created/modified
  }
);

//const User = mongoose.model("User", userSchema);

module.exports = mongoose.model("User", userSchema);
