import express, { request, response } from "express";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import diaryRoutes from "./routes/diaryRoutes.js";

// Connect to MongoDB
const app = express();

//middleware
app.use(cors());
/* app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"]
  })
); */

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
