import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() => {
    console.log("Connnected to DB");
  })
  .catch((error) => {
    console.log("error connnecting to DB", error);
  });

app.listen(4000, () => {
  console.log(`Server listening on port 4000`);
});
