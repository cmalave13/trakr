const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    distance: { type: Number, required: false },
    calories: { type: Number, required: true },
    date: { type: Date, reqiored: true },
  },
  {
    timestamps: true,
  }
);

// const Exercise =

module.exports = mongoose.model("Exercise", exerciseSchema);
