import express from "express";
import cors from "cors";
import Mongoose from "mongoose";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (request, response) => {
  response.status(200).send("hello");
});

const MongoURL =
  "mongodb+srv://sabagiorkhelidze:exadel@ecommerce.xzoob7x.mongodb.net/?retryWrites=true&w=majority";

Mongoose.connect(MongoURL)
  .then(() => {
    console.log("App connected to db");
    app.listen(8080, () => {
      console.log("app is listening to post 8080");
    });
  })
  .catch((err) => console.log(err));
