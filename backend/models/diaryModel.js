import mongoose, { mongo } from "mongoose";
const diarySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Number,
    required: true,
  },
});

export const Diary = mongoose.model("Diary", diarySchema);
