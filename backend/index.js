import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Diary } from "./models/diaryModel.js";
import diaryRoutes from "./routes/diaryRoutes.js"

// Connect to MongoDB
const app = express();
app.use(express.json());
app.use("/diary", diaryRoutes);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(244).send("Welcome to Rice Field Bitch");
});



//MongoDB
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connection is Running");
    app.listen(PORT, () => {
      console.log(`The server is running ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
