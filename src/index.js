require("./models/Candidate");
require("./models/Party");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const candidateRoutes = require("./routes/candidateRoutes");
const partyRoutes = require("./routes/partyRoutes");

const app = express();

app.use(bodyParser.json());
app.use(candidateRoutes);
app.use(partyRoutes);

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.connection.on("connected", () => {
  console.log("connected to MongoDB");
});

// Retry connection
const connectWithRetry = () => {
  console.log("MongoDB connection with retry");
  return mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

// Exit application on error
mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
  setTimeout(connectWithRetry, 5000);
  // process.exit(-1)
});

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(process.env.PORT || 3000);
