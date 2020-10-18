const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index");
const cors = require("cors");
const Pusher = require("pusher");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const pusher = new Pusher({
  appId: process.env.pusherAppId,
  key: process.env.pusherKey,
  secret: process.env.pusherSecret,
  cluster: process.env.pusherCluster,
  useTLS: process.env.pusherEncrypted,
});

let db = mongoose.connect(process.env.mongoDB, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db = mongoose.connection;
db.once("open", () => {
  console.log("DB Connected ☘️");

  const msgCollection = db.collection("messages");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Error");
    }
  });
});

app.use("/", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server connected on port: ${PORT} ☘️`));
