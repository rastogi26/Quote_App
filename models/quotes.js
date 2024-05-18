import mongoose, { Schema } from "mongoose";

const quoteSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
});

mongoose.model("Quote", quoteSchema);
