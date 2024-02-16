import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Diary } from "./models/diaryModel.js";

// Connect to MongoDB
const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(244).send("Welcome to Rice Field Bitch");
});

//Route for displaying all data
app.get("/diary", async (request, response) => {
  try {
    const diary = await Diary.find({});
    return response.status(200).json({
      count: diary.length,
      data: diary,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for displaying specific data
app.get("/diary/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const diaryId = await Diary.findById(id);
    if (!diaryId) {
      return response.status(404).json({ message: "Their is no data" });
    }
    return response.status(200).json(diaryId);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for updating a diary
app.put("/diary/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.dateCreated
    ) {
      return response
        .status(400)
        .send({ message: "Send the the title, author and datecreated" });
    }

    const { id } = request.params;

    const result = await Diary.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response
        .status(404)
        .json({ message: "The diary is not updating" });
    }

    return response.status(200).send({ message: "The diary is updating" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for deleting diary
app.delete("/diary/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Diary.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).json({ message: "Diary not found" });
    }
    return response.status(200).send({ message: "Diary is Deleted" });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

//Route for creating a diary
app.post("/diary", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.dateCreated
    ) {
      return response.status(201).send({
        message: "Sending Loves to my homie the title, publish, and created",
      });
    }
    const newDiary = {
      title: request.body.title,
      author: request.body.author,
      dateCreated: request.body.dateCreated,
    };
    const diary = await Diary.create(newDiary);
    return response.status(201).send(diary);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
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
