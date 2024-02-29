import express from "express";
import { Diary } from "../models/diaryModel.js";

const router = express.Router();
//Route for displaying all data
router.get("/", async (req, res) => {
  try {
    const diary = await Diary.find({});
    return res.status(200).json({
      count: diary.length,
      data: diary,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for displaying specific data
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const diaryId = await Diary.findById(id);
    if (!diaryId) {
      return res.status(404).json({ message: "Their is no data" });
    }
    return res.status(200).json(diaryId);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for updating a diary
router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.dateCreated
    ) {
      return res
        .status(400)
        .send({ message: "Send the the title, author and datecreated" });
    }

    const { id } = req.params;

    const result = await Diary.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res
        .status(404)
        .json({ message: "The diary is not updating" });
    }

    return res.status(200).send({ message: "The diary is updating" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for deleting diary
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Diary.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Diary not found" });
    }
    return res.status(200).send({ message: "Diary is Deleted" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

//Route for creating a diary
router.post("/", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.dateCreated
    ) {
      return res.status(201).send({
        message: "Sending Loves to my homie the title, publish, and created",
      });
    }
    const newDiary = {
      title: req.body.title,
      author: req.body.author,
      dateCreated: req.body.dateCreated,
    };
    const diary = await Diary.create(newDiary);
    return res.status(201).send(diary);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
